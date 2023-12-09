import React, { useState, useEffect, useCallback, Component } from "react";
import Notifications from "../components/Notifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./ReportsCollaborator.module.css";
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
        `http://localhost/Psi/backend/services/dashboard.php?collaborator_id=${collaboratorId}`
      );
      console.log(response.data);
      // Extrai os dados da resposta
      const dataFromServer = response.data;

      // Atualiza o estado da série com os dados do servidor
      setSeries([
        {
          name: "Consuming",
          data: dataFromServer.map((item) =>
            parseFloat((item.DAILY_USAGE * 0.2).toFixed(1))
          ), // Arredonda para a primeira casa decimal
        },
      ]);

      // Atualiza o estado das opções com os valores da coluna "DAY" no eixo X
      setOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          ...prevOptions.xaxis,
          categories: dataFromServer.map((item) => item.DAY), // Usamos os valores da coluna "DAY" no eixo X
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
        width: 700,
        left: 400,
        transform: "translateX(-50%)",
      }}
    >
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={320}
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
        `http://localhost/Psi/backend/services/dashboard.php?collaborator_id=${collaboratorId}`
      );
      const dataFromServer = response.data;

      // Preencher o array de Consuming multiplicando por 2.5
      const consumingData = dataFromServer.map(
        (item) => item.MONTHLY_USAGE * 0.2
      );

      // Preencher o array de Plafond based on Contract com valores fixos (por exemplo, [50, 50])
      const plafondData = Array(consumingData.length).fill(50);

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
            categories: dataFromServer.map((item) => item.MONTH_YEAR),
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
          top: 80,
          width: 700,
          left: 720,
          transform: "translateX(-50%)",
        }}
      >
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={320}
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
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collaboratorId = sessionStorage.getItem("collaborator_id");
        const response = await axios.get(
          `http://localhost/Psi/backend/services/report2.php?collaborator_id=${collaboratorId}`
        );
        setTimelineData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  const openNotifications = useCallback(() => {
    setNotificationsOpen(true);
  }, []);

  const closeNotifications = useCallback(() => {
    setNotificationsOpen(false);
  }, []);


  const onDashboardContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-collaborator");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/help-collaborator");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/profile-collaborator");
  }, [navigate]);


  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.content}>
          <div className={styles.bigCardChild4} />
          <div className={styles.bigCardChild3} />

          <div className={styles.monthlyExpenses}>
            <div className={styles.bigCardChild1} />
            <ApexChartClass />
            <div className={styles.graph}>
              {/* GOSTAVA QUE O DASHBOARD FICASSE NESTE BLOCO DE CODIGO*/}
            </div>
          </div>

          <div className={styles.activity}>
            <div className={styles.bigCardChild} />
            {/* <img className={styles.lineIcon} alt="" src="/line.svg" />*/}
            <div className={styles.apexChartContainer}>
              <ApexChart />
            </div>
          </div>

          <div className={styles.analysis1}>
            <b className={styles.textLeft}>
              You loaded it on the following days and got the following results:
            </b>
            <ul className={styles.analysisChild}>
              {timelineData.map((item) => (
                <li key={item.DATE_USAGE}>
                  <span>
                    In day{" "}
                    <strong className={styles.dateUsage}>
                      {item.DATE_USAGE}
                    </strong>{" "}
                    consumed{" "}
                  </span>
                  <span className={styles.span}>
                    <strong className={styles.dailyUsage}>
                      {item.DAILY_USAGE}
                    </strong>{" "}
                    what converted to money is{" "}
                    <strong className={styles.dailyUsageE}>
                      {item.DAILY_USAGEE}
                    </strong>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.analysis2}>
          <b>
            You loaded it on the following days and got the following results:
          </b>
          <ul className={styles.november5October6Septemb}>
            {timelineData.map((item) => (
              <li key={item.DATE_USAGE}>
                <span>
                  In month{" "}
                  <strong className={styles.monthUsage}>
                    {item.MONTH_USAGE}
                  </strong>{" "}
                  consumed{" "}
                </span>
                <span className={styles.span}>
                  <strong className={styles.monthlyUsage}>
                    {item.MONTHLY_USAGE}
                  </strong>{" "}
                  what converted to money is{" "}
                  <strong className={styles.monthlyUsageE}>
                    {item.MONTHLY_USAGEE}
                  </strong>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.header}>
          <img
            className={styles.notificationsIcon}
            alt=""
            src="/notifications.svg"
            onClick={openNotifications}
          />
          <b className={styles.dashboard1}>Reports</b>
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
            <div className={styles.dashboard2}>
              <div className={styles.reportsTexto1}>Reports</div>
            </div>
            <div
              className={styles.dashboard3}
              onClick={onDashboardContainerClick}
            >
              <div className={styles.reportsTexto}>Dashboard</div>
            </div>
            <b className={styles.menu1}>MENU</b>
          </div>
          <div className={styles.line} />
          <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
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
