import mysql.connector
from tapo import ApiClient, EnergyDataInterval
from datetime import datetime

async def main():
    # Conectar ao banco de dados MySQL
    connection = mysql.connector.connect(host="localhost", user="root", password="", database="infocharge")

    if connection.is_connected():
        print("Connected Successfully")
    else:
        print("Error")
        return

    # Criar um cursor para executar comandos SQL
    cursor = connection.cursor()

    try:
        select_users_query = "SELECT EMAIL_PLUG, PASSWORD_PLUG, IP_PLUG FROM collaborator"
        cursor.execute(select_users_query)
        users_data = cursor.fetchall()

        users = [{"tapo_username": str(user_data[0]), "tapo_password": str(user_data[1]), "ip_address": str(user_data[2])} for user_data in users_data]

        for user_info in users:
            tapo_username = user_info["tapo_username"]
            tapo_password = user_info["tapo_password"]
            ip_address = user_info["ip_address"]

            # Criar uma instância de ApiClient e obter a instância do dispositivo
            client = ApiClient(str(tapo_username), str(tapo_password))
            device = await client.p110(str(ip_address))

            # Obter dados mensais de consumo de energia
            energy_data_monthly = await device.get_energy_data(
                EnergyDataInterval.Monthly,
                datetime(datetime.today().year, 1, 1),
            )

            # Extrair os dados mensais específicos para cada mês
            monthly_data = energy_data_monthly.to_dict()['data']

            # Obter dados diários de consumo de energia
            energy_data_daily = await device.get_energy_data(
                EnergyDataInterval.Daily,
                datetime.today(),
            )

            # Obter o tempo de execução hoje
            today_runtime = await device.get_device_usage()
            today_runtime_value = today_runtime.to_dict()['time_usage']['today']

            # Obter os dados de uso do dispositivo
            device_usage = await device.get_device_usage()
            daily_usage_value = device_usage.to_dict()['power_usage']['today']
            weekly_usage_value = device_usage.to_dict()['power_usage']['past7']
            monthly_usage_value = device_usage.to_dict()['power_usage']['past30']

            try:
                # Consultar COLLABORATOR_ID usando tapo_username
                select_collaborator_query = "SELECT COLLABORATOR_ID FROM collaborator WHERE EMAIL = %s"
                cursor.execute(select_collaborator_query, (tapo_username,))
                collaborator_id_result = cursor.fetchone()

                if collaborator_id_result:
                    collaborator_id = collaborator_id_result[0]
                else:
                    print(f"Erro: Não foi possível encontrar o COLLABORATOR_ID para o tapo_username {tapo_username}")
                    return

                # Inserir os dados nas tabelas existentes
                insert_query = "INSERT INTO CONSUMING (DAILY_USAGE, WEEKLY_USAGE, MONTHLY_USAGE, DAILY_RUNTIME, DAY, MONTH_YEAR, YEAR, COLLABORATOR_ID) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
                data = (daily_usage_value, weekly_usage_value, monthly_usage_value, today_runtime_value, datetime.today().day, datetime.today().month, datetime.today().year, collaborator_id)
                cursor.execute(insert_query, data)

                # Commit das alterações
                connection.commit()
                print("Dados inseridos com sucesso!")

            except Exception as e:
                print(f"Erro ao inserir dados: {e}")

    finally:
        # Fechar o cursor e a conexão
        cursor.close()
        connection.close()

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())