import React, { useState, useEffect, useCallback, Component } from "react";
import Notifications from "../components/Notifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

const ApexChart = () => {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
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
        fontFamily: "Inter, sans-serif",
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
      },
    },
    xaxis: {
      categories: [], // Preencheremos isso com os valores da coluna "DAY"
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
        `http://localhost/Psi/backend/services/report.php?collaborator_id=${collaboratorId}`
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
    <div id="chart">
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
          data: [], // Preencheremos isso com os valores da coluna "MONTHLY_USAGE" multiplicados por 2.5
        },
        {
          name: "Plafond based on Contract",
          data: [], // Array dinâmico com o mesmo comprimento da série "Consuming"
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
            fontFamily: "Inter, sans-serif",
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
        `http://localhost/Psi/backend/services/report.php?collaborator_id=${collaboratorId}`
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
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
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

  const onTimelinesContainerClick = useCallback(() => {
    navigate("/timeline");
  }, [navigate]);

  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.content}>
          <div className={styles.monthlyExpenses}>
            <div className={styles.bigCard}>
              <div className={styles.bigCardChild} />
              <ApexChartClass />
            </div>
            <div className={styles.graph}>
              {/* GOSTAVA QUE O DASHBOARD FICASSE NESTE BLOCO DE CODIGO*/}
            </div>
          </div>
          <div className={styles.variationBasedOnContract}>
            <div className={styles.bigCard1}>
              <div className={styles.bigCardChild} />
            </div>
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/background7.svg"
            />

            <ApexChart />
          </div>
          <div className={styles.power}>
            <b>
              You loaded it on the following days and got the following results:
            </b>
            <ul className={styles.november5October6Septemb}>
              {timelineData.map((item) => (
                <li key={item.DATE_USAGE}>
                  <span>
                    In month{" "}
                    <strong style={{ color: "rgb(51, 153, 255)" }}>
                      {item.MONTH_USAGE}
                    </strong>{" "}
                    consumed{" "}
                  </span>
                  <span className={styles.span}>
                    <strong style={{ color: "rgb(51, 153, 255)" }}>
                      {item.MONTHLY_USAGE}
                    </strong>{" "}
                    what converted to money is{" "}
                    <strong style={{ color: "rgb(51, 153, 255)" }}>
                      {item.MONTHLY_USAGEE}
                    </strong>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.activity}>
            <div className={styles.bigCard3}></div>
            <div className={styles.apexChartContainer}>
              <b className={styles.textletf}>
                You loaded it on the following days and got the following
                results:
              </b>
              <b className={styles.textletf}>
                <ul className={styles.november5October6Septemb}>
                  {timelineData.map((item) => (
                    <li key={item.DATE_USAGE}>
                      <span>
                        In day{" "}
                        <strong style={{ color: "rgb(51, 153, 255)" }}>
                          {item.DATE_USAGE}
                        </strong>{" "}
                        consumed{" "}
                      </span>
                      <span className={styles.span}>
                        <strong style={{ color: "rgb(51, 153, 255)" }}>
                          {item.DAILY_USAGE}
                        </strong>{" "}
                        what converted to money is{" "}
                        <strong style={{ color: "rgb(51, 153, 255)" }}>
                          {item.DAILY_USAGEE}
                        </strong>
                      </span>
                    </li>
                  ))}
                </ul>
              </b>
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
            <img className={styles.settingsIcon} alt="" src="/settings.svg" />
            <div className={styles.settings1}>Settings</div>
          </div>
          <div className={styles.help} onClick={onHelpContainerClick}>
            <img className={styles.iconshelp} alt="" src="/iconshelp.svg" />
            <div className={styles.help1}>Help</div>
          </div>
          <div className={styles.menu}>
            <div className={styles.profile} onClick={onProfileContainerClick}>
              <div className={styles.reportsTexto}>Profile</div>
            </div>
            <div className={styles.reports} onClick={onReportsContainerClick}>
              <div className={styles.reportsTexto}>Reports</div>
            </div>
            <div
              className={styles.timelines}
              onClick={onTimelinesContainerClick}
            >
              <div className={styles.reportsTexto}>Timelines</div>
            </div>
            <div className={styles.dashboard2}>
              <b className={styles.dashboard3}>Dashboard</b>
            </div>
            <b className={styles.menu1}>MENU</b>
          </div>
          <div className={styles.line5} />
          <div className={styles.line6} />
          <div className={styles.line7} />
          <div className={styles.line8} />
          <img className={styles.logo1Icon} alt="" src="/logo-11@2x.png" />
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
