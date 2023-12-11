import React, { useState, useEffect, useCallback, Component } from "react";
import Notifications from "../components/Notifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import ReactApexChart from "react-apexcharts";
import axios from "axios";



const ApexChart = () => {
  const [series, setSeries] = useState([
    {
      color: "#005c7d", // Change this color to your desired color
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      style: {
        color: "#005c7d",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Daily Activity",
      align: "center",
      style: {
        fontSize: "18px", // Adjust font size
        color: "#005c7d", // Adjust text color
        fontFamily: "var(--body-medium-regular)", // Adjust font family
        fontWeight: "bold", // Adjust font weight
      },
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    yaxis: {
      title: {
        text: " € (EURO) ",
        style: {
          color: "#005c7d",
        },
      },
    },
    xaxis: {
      categories: [],
      // Preencheremos isso com os valores da coluna "DAY"
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return " € " + val;
        },
      },
    },
  });

  // Função para buscar dados do servidor
  const fetchData = useCallback(async () => {
    try {
      // Substitua a URL abaixo pela URL correta do seu arquivo PHP
      const collaboratorId = sessionStorage.getItem("collaborator_id");
      const response = await axios.get(
        `http://localhost/Psi/backend/services/dashboardplafond.php?collaborator_id=${collaboratorId}`
      );
      console.log(response.data);
      // Extrai os dados da resposta
      const dataFromServer = response.data;

      // Atualiza o estado da série com os dados do servidor
      setSeries([
        {
          name: "Consuming",
          data: dataFromServer.map((item) =>
            parseFloat((item.DAILY_USAGE * item.TARIFF ).toFixed(1))
          ), // Arredonda para a primeira casa decimal
        },
      ]);

      // Atualiza o estado das opções com os valores da coluna "DAY" no eixo X
      setOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          ...prevOptions.xaxis,
          categories: dataFromServer.map((item) => `${item.DAY}/${item.MONTH_YEAR}` ), // Usamos os valores da coluna "DAY" no eixo X
        },
      }));
    } catch (error) {
      console.error("Erro ao buscar dados do servidor:", error);
    }
  }, []);

  // Chama a função para buscar dados ao montar o componente
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div
      id="chart"
      style={{
        position: "absolute",
        top: 40,
        width: 300,
        left: 190,
        transform: "translateX(-50%)",
      }}
    >
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

class ApexChartClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Consuming",
          data: [],
          color: "#005c7d", // Preencheremos isso com os valores da coluna "MONTHLY_USAGE" multiplicados por 2.5
        },
        {
          name: "Plafond based on Contract",
          data: [],
          color: "rgb(58, 207, 108)", // Array dinâmico com o mesmo comprimento da série "Consuming"
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
        title: {
          text: "Monthly Expenses",
          align: "center",
          style: {
            fontSize: "18px", // Adjust font size
            color: "#005c7d", // Adjust text color
            fontFamily: "var(--body-medium-regular)", // Adjust font family
            fontWeight: "bold", // Adjust font weight
          },
        },
        xaxis: {
          categories: [], // Preencheremos isso com os valores da coluna "MONTH_YEAR"
        },
        yaxis: {
          title: {
            text: " € (EURO) ",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return " € " + val;
            },
          },
        },
      },
    };
  }

  fetchData = async () => {
    try {
      const collaboratorId = sessionStorage.getItem("collaborator_id");
      const response = await axios.get(
        `http://localhost/Psi/backend/services/dashboardplafond.php?collaborator_id=${collaboratorId}`
      );
      const dataFromServer = response.data;

      // Preencher o array de Consuming multiplicando por 2.5
      const consumingData = dataFromServer.map(
        (item) => (item.MONTHLY_USAGE * item.TARIFF).toFixed(1)
      );

      // Preencher o array de Plafond based on Contract com valores fixos (por exemplo, [50, 50])
      const plafondData = dataFromServer.map((item) => item.PLAFOND);

      this.setState({
        series: [
          {
            name: "Consuming",
            data: consumingData,
          },
          {
            name: "Plafond based on Contract",
            data: plafondData,
          },
        ],
        options: {
          ...this.state.options,
          xaxis: {
            ...this.state.options.xaxis,
            categories: dataFromServer.map((item) => {
              const monthNumber = parseInt(item.MONTH_YEAR, 10);
              const monthNames = [
                'January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August',
                'September', 'October', 'November', 'December'
              ];
          
              return monthNames[monthNumber - 1]; // Arrays are zero-based
            }),
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
          top: -320,
          width: 640,
          left:720,
          transform: "translateX(-50%)",
        }}
      >
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={700}
        />
      </div>
    );
  }
}



const Dashboard = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState(1); // Valor padrão ou vazio
  const [monthlyUsageData, setMonthlyUsageData] = useState([]);
  const [monthlyChargeData, setMonthlyChargeData] = useState([]);
  const [timelineData, setTimelineData] = useState([]);


  const openNotifications = useCallback(() => {
    setNotificationsOpen(true);
  }, []);

  const closeNotifications = useCallback(() => {
    setNotificationsOpen(false);
  }, []);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-collaborator");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/help-collaborator");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/profile-collaborator");
  }, [navigate]);

  const onReportsContainerClick = useCallback(() => {
    navigate("/reports-collaborator");
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collaboratorId = sessionStorage.getItem("collaborator_id");
        const response = await axios.get(
          `http://localhost/Psi/backend/services/timeline.php?collaborator_id=${collaboratorId}`
        );
        setTimelineData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Função para obter dados do backend
    const fetchData = async () => {
      try {
        const collaboratorId = sessionStorage.getItem("collaborator_id");
        const response = await axios.get(
          `http://localhost/Psi/backend/services/timeline2.php?collaborator_id=${collaboratorId}`
        );
        setMonthlyChargeData(response.data);
      } catch (error) {
        console.error("Erro ao obter dados do backend:", error);
      }
    };

    fetchData(); // Chama a função ao montar o componente
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collaboratorId = sessionStorage.getItem("collaborator_id");
        console.log(selectedMonth);
        const response = await fetch(
          "http://localhost/Psi/backend/services/powermonthly.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              collaborator_id: collaboratorId,
              month: selectedMonth,
            }),
          }
        );

        const data = await response.json();

        console.log("Data from server:", data); // Adiciona esta linha para verificar a estrutura dos dados

        if (data.status === "sucess") {
          const monthlyUsage = {
            DAY: data.DAY,
            MONTH_YEAR: data.MONTH_YEAR,
            DAILY_USAGE: data.DAILY_USAGE,
            DAILY_RUNTIME: data.DAILY_RUNTIME,
            WEEKLY_USAGE: data.WEEKLY_USAGE,
            MONTHLY_USAGE: data.MONTHLY_USAGE,
          };

          setMonthlyUsageData([monthlyUsage]);
        } else {
          console.error(
            `Erro ao obter dados para o mês ${selectedMonth}:`,
            data.error
          );
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [selectedMonth]);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.content}>

          <div className={styles.monthlyExpenses}>
            <div className={styles.bigCardChild1} />
            <ApexChartClass />
            <div className={styles.graph}>
              {/* GOSTAVA QUE O DASHBOARD FICASSE NESTE BLOCO DE CODIGO*/}
            </div>
          </div>
          
          <div className={styles.bigCardChild3} />
          <div className={styles.power}>
            <div>
              <div className={styles.powerInKwhContainer}>
                <p className={styles.kwh}>
                  {monthlyUsageData.length > 0
                    ? `${monthlyUsageData[0].MONTHLY_USAGE} kWh`
                    : "Loading..."}
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
              </div>
              <select
                className={styles.monthsDropDown}
                id="meses"
                onChange={handleMonthChange}
                value={selectedMonth}
              >
                {/* Gera as opções do select usando os nomes dos meses */}
                {monthNames.map((monthName, index) => (
                  <option key={index} value={index + 1}>
                    {monthName}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.bigCardChild4} />
            <div className={styles.numberOfChargesMadeMonthly}>
              <b className={styles.numberOfCharges}>
                Number of Charges Made Monthly
              </b>
              <div className={styles.line} />

              <ul className={styles.monthlyChargesList}>
                {monthlyChargeData.map((monthData, index) => (
                  <li key={index} className={styles.chargeListItem}>
                    <span
                      className={styles.date}
                    >{`${monthData.DATE_USAGE}: `}</span>
                    <span className={styles.totalCharges}>
                      {monthData.TOTAL_CHARGES}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.bigCardChild5} />
            <div className={styles.historyOfCharges} style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <b className={styles.historyOfCharges1}>History of Charges</b>
              <div className={styles.line} />
              <div className={styles.tuesday23Container}>
                <ul className={styles.november5October6Septemb}>
                  {timelineData.map((item) => (
                    <li key={item.DATE_USAGE}>
                      <span className={styles.date}>{item.DATE_USAGE} - </span>
                      <span className={styles.span}>{item.DAILY_USAGE}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>


            <b className={styles.power1}>Power</b>
          </div>
          <div className={styles.activity}>
            <div className={styles.bigCardChild} />

            {/* <img className={styles.lineIcon} alt="" src="/line.svg" />*/}
            <div className={styles.apexChartContainer}>
              <ApexChart />
            </div>
          </div>
        </div>

        <div className={styles.header}>
          <img
            className={styles.notificationsIcon}
            alt=""
            src="/notifications.svg"
            onClick={openNotifications}
          />
          <b className={styles.dashboard1}>Dashboard</b>
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
              <div className={styles.reportsTexto}>Profile</div>
            </div>
            <div className={styles.reports} onClick={onReportsContainerClick}>
              <div className={styles.reportsTexto}>Reports</div>
            </div>
            <div className={styles.dashboard2}>
              <b className={styles.dashboard3}>Dashboard</b>
            </div>
            <b className={styles.menu1}>MENU</b>
          </div>
          <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
          <div className={styles.line} />
        </div>
      </div>

      {isNotificationsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotifications}
        >
          <Notifications onClose={closeNotifications} />
        </PortalPopup>
      )}
    </>
  );
};

export default Dashboard;
