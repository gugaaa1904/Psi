"""P110 & P115 Example"""

import asyncio
import os
from datetime import datetime
import time
from tapo import ApiClient, EnergyDataInterval



async def main():
    tapo_username = "joao57rafa@gmail.com"
    tapo_password = "Novaims1"
    ip_address = "192.168.1.6"

    client = ApiClient(tapo_username, tapo_password)
    device = await client.p110(ip_address)
    while True:
        time.sleep(1)
        print("Turning device on...")
        await device.on()

        print("Waiting 2 seconds...")
        await asyncio.sleep(2)

        print("Turning device off...")
        await device.off()

        device_info = await device.get_device_info()
        print(f"Device info: {device_info.to_dict()}")

        device_usage = await device.get_device_usage()
        print(f"Device usage: {device_usage.to_dict()}")

        current_power = await device.get_current_power()
        print(f"Current power: {current_power.to_dict()}")

        energy_usage = await device.get_energy_usage()
        print(f"Energy usage: {energy_usage.to_dict()}")

        today = datetime.today()
        energy_data_hourly = await device.get_energy_data(EnergyDataInterval.Hourly, today)
        print(f"Energy data (hourly): {energy_data_hourly.to_dict()}")

        energy_data_daily = await device.get_energy_data(
            EnergyDataInterval.Daily,
            datetime(today.year, get_quarter_start_month(today), 1),
        )
        print(f"Energy data (daily): {energy_data_daily.to_dict()}")

        energy_data_monthly = await device.get_energy_data(
            EnergyDataInterval.Monthly,
            datetime(today.year, 1, 1),
        )
        print(f"Energy data (monthly): {energy_data_monthly.to_dict()}")
        print ("===============================================================================================================================================")

        January = energy_data_monthly.to_dict()['data'][0]
        February = energy_data_monthly.to_dict()['data'][1]
        March = energy_data_monthly.to_dict()['data'][2]
        April = energy_data_monthly.to_dict()['data'][3]
        May = energy_data_monthly.to_dict()['data'][4]
        June = energy_data_monthly.to_dict()['data'][5]
        July = energy_data_monthly.to_dict()['data'][6]
        August = energy_data_monthly.to_dict()['data'][7]
        September = energy_data_monthly.to_dict()['data'][8]
        October = energy_data_monthly.to_dict()['data'][9]
        November = energy_data_monthly.to_dict()['data'][10]
        December = energy_data_monthly.to_dict()['data'][11]

        print(f"January: {January}")
        print(f"February: {February}")
        print(f"March: {March}")
        print(f"April: {April}")
        print(f"May: {May}")
        print(f"June: {June}")
        print(f"July: {July}")
        print(f"August: {August}")
        print(f"September: {September}")
        print(f"October: {October}")
        print(f"November: {November}")
        print(f"December: {December}")

def get_quarter_start_month(today: datetime) -> int:
    return 3 * ((today.month - 1) // 3) + 1


if __name__ == "__main__":
    asyncio.run(main())
