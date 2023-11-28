import mysql.connector
from tapo import ApiClient, EnergyDataInterval
from datetime import datetime

async def main():
    tapo_username = "diogo.aaa.correia.2002@gmail.com"
    tapo_password = "Novaims2"
    ip_address = "192.168.1.18"

    # Criar uma instância de ApiClient e obter a instância do dispositivo
    client = ApiClient(tapo_username, tapo_password)
    device = await client.p110(ip_address)

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
    daily_usage_value = device_usage.to_dict()['power_usage']['today']  # Usando 'power_usage' em vez de 'saved_power'
    weekly_usage_value = device_usage.to_dict()['power_usage']['past7']
    monthly_usage_value = device_usage.to_dict()['power_usage']['past30']

    # Definir um ID fictício para COLLABORATOR_ID
    collaborator_id = 2  # Substitua pelo ID desejado

    # Conectar ao banco de dados MySQL
    connection = mysql.connector.connect(host="localhost", user="root", password="", database="infocharge")

    if connection.is_connected():
        print("Connected Successfully")
    else:
        print("Error")

    # Criar um cursor para executar comandos SQL
    cursor = connection.cursor()

    try:
        # Extrair os valores específicos de energy_data_daily
        energy_data_value = energy_data_daily.to_dict()['data'][0]

        # Inserir os dados nas tabelas existentes
        insert_query = "INSERT INTO CONSUMING (DAILY_USAGE, WEEKLY_USAGE, MONTHLY_USAGE, DAILY_RUNTIME, DAY, MONTH_YEAR, COLLABORATOR_ID) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        data = (daily_usage_value, weekly_usage_value, monthly_usage_value, today_runtime_value, datetime.today().day, f"{datetime.today().month}_{datetime.today().year}", collaborator_id)
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
