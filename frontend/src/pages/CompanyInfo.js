import React, { useState, useEffect, useCallback, Component } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CompanyInfo.module.css";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

class ApexChartClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "CO2 Savings",
          data: [],
          color: "#005c7d", // Preencheremos isso com os valores da coluna "MONTHLY_USAGE" multiplicados por 2.5
        },
        {
          name: "Actually Charged",
          data: [],
          color: "rgb(58, 207, 108)",
          // Array dinâmico com o mesmo comprimento da série "Consuming"
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        
        xaxis: {
          categories: [], // Preencheremos isso com os valores da coluna "MONTH_YEAR"
        },
        yaxis: {},
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
      },
    };
  }

  

  fetchData = async () => {
    try {
      const companyID = sessionStorage.getItem("company_id");
      const response = await axios.get(
        `http://localhost/Psi/backend/services/consumingAdmin3.php?company_id=${companyID}`
      );
      //para mandar o company_id no get é tipo "http://localhost/Psi/backend/services/consumingAdmin.php?id=3"
      //sendo que o id é o company_id daqui -> const idString = sessionStorage.getItem('company_id');
      const dataFromServer = response.data;
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      console.log(dataFromServer);
      // Preencher o array de Consuming multiplicando por 2.5
      const consumingData = dataFromServer.map(
        (item) => (item.MONTHLY_USAGE / 0.2) * 0.245 
      );

      // Preencher o array de Plafond based on Contract com valores fixos (por exemplo, [50, 50])
      const plafondData = Array(consumingData.length).fill(20);

      this.setState({
        series: [
          {
            name: "",
            data: consumingData ,
          }
        ],
        options: {
          ...this.state.options,
          xaxis: {
            ...this.state.options.xaxis,
          categories: dataFromServer.map(
            (item) => months[parseInt(item.MONTH_YEAR, 10) - 1]
            ),
          },
        },
      });
    } catch (error) {
      console.error("Erro ao buscar dados do servidor:", error);
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div
        id="chart"
        style={{
          position: "absolute",
          top: 300,
          bottom: 40,
          width: 600,
          left: "47%",
          transform: "translateX(-50%)",
        }}
      >
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={425}
        />
      </div>
    );
  }
}

const CompanyInfo = () => {
  const navigate = useNavigate();
  const [averageWeeklyUsage, setAverageWeeklyUsage] = useState(null);
  const [averageMonthlyUsage, setAverageMonthlyUsage] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Weekly");
  const [tariff, settariff] = useState(null);

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
        const companyId = sessionStorage.getItem("company_id");
        const response = await fetch(
          `http://localhost/Psi/backend/services/companyinfo.php?company_id=${companyId}`
        );
        const data = await response.json();
        setAverageWeeklyUsage(data[0].average_weekly_usage);
        setAverageMonthlyUsage(data[0].average_monthly_usage);
        settariff(data[0].tariff);
      } catch (error) {
        console.error("Erro ao buscar dados do backend:", error);
      }
    };

    // Chama a função de busca de dados ao montar o componente
    fetchData();
  }, []);

  return (
    <div className={styles.companyInfo}>
      <div className={styles.content}>
        <div className={styles.background1} />
        <div className={styles.reductionOfCo2Emissions}>
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
          <ApexChartClass />
        </div>
        <div className={styles.background3} />
        <div className={styles.totalSpendingsIn}>
          <div className={styles.value}>
            {selectedOption === "Weekly" &&
              averageWeeklyUsage &&
              tariff &&
              `${(averageWeeklyUsage * tariff).toFixed(1)} €`}

            {selectedOption === "Monthly" &&
              averageMonthlyUsage &&
              tariff &&
              `${(averageMonthlyUsage * tariff).toFixed(1)} €`}
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
        <div className={styles.background2} />
        <div className={styles.totalConsumedInKwh}>
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
          <div className={styles.generalOverview}>Company Information</div>
        </div>
      </div>
      <div className={styles.header1}>
        <b className={styles.companyInformation}>Company Information</b>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.settings} onClick={onSettingsContainerClick}>
          <div className={styles.settings1}>Settings</div>
        </div>
        <div className={styles.help} onClick={onHelpContainerClick}>
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
        <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
        <div className={styles.line} />
      </div>
    </div>
  );
};

export default CompanyInfo;
