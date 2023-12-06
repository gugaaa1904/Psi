import React, { useState, useEffect, useCallback , Component } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CompanyInfo.module.css";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: "Expected",
          data: [13, 23, 20, 8, 13, 27],
        },
      ],
      options: {
        chart: {
          type: "bar", // Set to "bar" for a bar graph
          height: 350,
          stacked: true,
          stackType: "100%",
        },
        xaxis: {
          categories: ["June", "July", "August", "September", "October", "November"],
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "bottom",
          offsetX: 0,
          offsetY: 0,
        },
        grid: {
          show: false, 
        },
        yaxis: {
          show: false, 
        },
      },
    };
  }

  render() {
    return (
      <div
        id="chart"
        style={{
          position: "absolute",
          top: 250,
          bottom: 40,
          width: 400,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={400}
        />
      </div>
    );
  }
}


const CompanyInfo = () => {
  const navigate = useNavigate();
  const [averageWeeklyUsage, setAverageWeeklyUsage] = useState(null);
  const [averageMonthlyUsage, setAverageMonthlyUsage] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Weekly');

  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-admin");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/help-admin");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/profile-admin");
  }, [navigate]);

  const onCollaboratorInformationContainerClick = useCallback(() => {
    navigate("/collaborator-info");
  }, [navigate]);

  const onRemoveUserContainerClick = useCallback(() => {
    navigate("/remove-user");
  }, [navigate]);

  const onAddUserContainerClick = useCallback(() => {
    navigate("/add-user");
  }, [navigate]);

  useEffect(() => {
    // Função para buscar os dados do backend
    const fetchData = async () => {
      try {
        const companyId = sessionStorage.getItem('company_id');
        const response = await fetch(`http://localhost/Psi/backend/services/companyinfo.php?company_id=${companyId}`);
        const data = await response.json();
        setAverageWeeklyUsage(data[0].average_weekly_usage);
        setAverageMonthlyUsage(data[0].average_monthly_usage);


      } catch (error) {
        console.error('Erro ao buscar dados do backend:', error);
      }
    };

    // Chama a função de busca de dados ao montar o componente
    fetchData();
  }, []);

  return (
    <div className={styles.companyInfo}>
      <div className={styles.content}>
        <div className={styles.reductionOfCo2Emissions}>
          <div className={styles.background} />
          <div className={styles.reductionOfCo2}>
            Reduction of CO2 Emissions
          </div>
          <div className={styles.totalRevenue}>
            The Reduction of CO2 Emissions signifies the overall decrease in the
            amount of carbon dioxide released into the environment. On average,
            we assume 0.245 kg of CO2 emissions per kilometer traveled by a
            fossil-fueled car. An electric car might need approximately 0.2 kWh
            of electricity to travel 1 kilometer.
          </div>
          <ApexChart />
        </div>
        <div className={styles.totalSpendingsIn}>
          <div className={styles.background} />
          <div className={styles.value}>
            {selectedOption === "Weekly" &&
              averageWeeklyUsage &&
              `${(averageWeeklyUsage * 0.2).toFixed(1)} €`}
            {selectedOption === "Monthly" &&
              averageMonthlyUsage &&
              `${(averageMonthlyUsage * 0.2).toFixed(1)} €`}
          </div>
          <div
            className={styles.text}
          >{`The Total Spendings in euros (€) represent the cumulative sum of all expenditures incurred by various collaborators within the company. `}</div>
          <div className={styles.totalSpendingsIn1}>Total Spendings in €</div>
          <select
            className={styles.monthsDropDown}
            id="select_weekly_monthly"
            onChange={(e) => setSelectedOption(e.target.value)}
            value={selectedOption}
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        <div className={styles.totalConsumedInKwh}>
          <div className={styles.background} />
          <div className={styles.kwh}>
            {selectedOption === "Weekly" &&
              averageWeeklyUsage &&
              `${averageWeeklyUsage} kWh`}
            {selectedOption === "Monthly" &&
              averageMonthlyUsage &&
              `${averageMonthlyUsage} kWh`}
          </div>
          <div className={styles.text}>
            The Total Energy Consumed in kilowatt-hours (kWh) is the sum of
            energy consumed by all individuals or entities associated with the
            company.
          </div>
          <div className={styles.totalConsumedIn}>Total Consumed in kWh</div>
          <select
            className={styles.monthsDropDown}
            id="select_weekly_monthly"
            onChange={(e) => setSelectedOption(e.target.value)}
            value={selectedOption}
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        <div className={styles.header}>
          <div className={styles.divider} />
          <div className={styles.generalOverview}>General Overview</div>
        </div>
      </div>
      <div className={styles.header1}>
        <b className={styles.companyInformation}>Company Information</b>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.settings} onClick={onSettingsContainerClick}>
          <img className={styles.settingsIcon} alt="" src="/settings.svg" />
          <div className={styles.settings1}>Settings</div>
        </div>
        <div className={styles.help} onClick={onHelpContainerClick}>
          <img className={styles.iconshelp} alt="" src="/iconshelp.svg" />
          <div className={styles.help1}>Help</div>
        </div>
        <div className={styles.menu}>
          <div className={styles.profile} onClick={onProfileContainerClick}>
            <div className={styles.profile1}>Profile</div>
          </div>
          <div
            className={styles.collaboratorInformation}
            onClick={onCollaboratorInformationContainerClick}
          >
            <div className={styles.profile1}>Collaborator Information</div>
          </div>
          <div className={styles.companyInformation1}>
            <b className={styles.companyInformation2}>Company Information</b>
          </div>
          <div
            className={styles.removeUser}
            onClick={onRemoveUserContainerClick}
          >
            <div className={styles.profile1}>Remove User</div>
          </div>
          <div className={styles.addUser} onClick={onAddUserContainerClick}>
            <div className={styles.profile1}>Add User</div>
          </div>
          <b className={styles.menu1}>MENU</b>
        </div>
        <div className={styles.line} />
        <div className={styles.line1} />
        <div className={styles.line2} />
        <div className={styles.line3} />
        <img className={styles.logo1Icon} alt="" src="/logo-11@2x.png" />
      </div>
    </div>
  );
};

export default CompanyInfo;