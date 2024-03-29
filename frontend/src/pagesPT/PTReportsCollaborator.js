import React, { useState, useEffect, useCallback, Component } from "react";
import Notifications from "../componentsPT/PTNotifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./PTReportsCollaborator.module.css";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import { Scrollbars } from 'react-custom-scrollbars';

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
      text: "Atividade Diária",
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
          name: "Consumo",
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
        width: 700,
        left: 410,
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
          name: "Consumo",
          data: [],
          color: "#005c7d", // Preencheremos isso com os valores da coluna "MONTHLY_USAGE" multiplicados por 2.5
        },
        {
          name: "Plafond com base no Contrato",
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
          text: "Despesas Mensais",
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
        `http://localhost/Psi/backend/services/dashboardmonthlyexpenses.php?collaborator_id=${collaboratorId}`
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
            name: "Consumo",
            data: consumingData,
          },
          {
            name: "Plafond com base no Contrato",
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
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro"
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
          top: 130,
          width: 700,
          left: 720,
          transform: "translateX(-50%)",
        }}
      >
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
  const [timelineDataReport3, setTimelineDataReport3] = useState([]);
  const [timelineDataReport2, setTimelineDataReport2] = useState([]);

  useEffect(() => {
    const fetchDataReport2 = async () => {
      try {
        const collaboratorId = sessionStorage.getItem("collaborator_id");
        const response = await axios.get(
          `http://localhost/Psi/backend/services/report2.php?collaborator_id=${collaboratorId}`
        );
        setTimelineDataReport2(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API (report2.php):", error);
      }
    };

    const fetchDataReport3 = async () => {
      try {
        const collaboratorId = sessionStorage.getItem("collaborator_id");
        const response = await axios.get(
          `http://localhost/Psi/backend/services/report3.php?collaborator_id=${collaboratorId}`
        );
        setTimelineDataReport3(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API (report3.php):", error);
      }
    };

    fetchDataReport2();
    fetchDataReport3();
  }, []);

  const openNotifications = useCallback(() => {
    setNotificationsOpen(true);
  }, []);

  const closeNotifications = useCallback(() => {
    setNotificationsOpen(false);
  }, []);


  const onDashboardContainerClick = useCallback(() => {
    navigate("/pt-dashboard");
  }, [navigate]);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/pt-settings-collaborator");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/pt-help-collaborator");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/pt-profile-collaborator");
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
              Carregou nos seguintes dias e obteve os seguintes resultados:
            </b>
            <Scrollbars autoHide style={{ maxHeight: '250px', width: '100%' }}>
              <ul className={styles.analysisChild}>
                {timelineDataReport3.map((item, index) => (
                  <li key={item.DATE_USAGE}>
                    <span>
                      No dia {" "}
                      <strong className={styles.dateUsage}>
                        {item.DATE_USAGE}
                      </strong>{" "}
                      consumiu {" "}
                    </span>
                    <span className={styles.span}>
                      <strong className={styles.dailyUsage}>
                        {item.DAILY_USAGE}
                      </strong>{" "}
                      o que convertido em dinheiro é:{" "}
                      <strong className={styles.dailyUsageE}>
                        {item.DAILY_USAGEE}
                      </strong>
                    </span>
                  </li>
                ))}
              </ul>
            </Scrollbars>
          </div>





        </div>

        <div className={styles.analysis2}>
          <b className={styles.resultsHeader}>
            Carregaste nos seguintes meses e obtiveste os seguintes resultados:
          </b>
          <Scrollbars autoHide style={{ maxHeight: '260px', width: '100%' }}>
            <ul className={styles.november5October6Septemb}>
              {timelineDataReport2.reduce((uniqueItems, item) => {
                const existingItemIndex = uniqueItems.findIndex(
                  (existingItem) => existingItem.DATE_USAGE === item.DATE_USAGE
                );

                if (existingItemIndex !== -1) {
                  uniqueItems[existingItemIndex] = item;
                } else {
                  uniqueItems.push(item);
                }

                return uniqueItems;
              }, []).slice(0, 7).map((uniqueItem) => (
                <li key={uniqueItem.DATE_USAGE}>
                  <span>
                    No mês de{" "}
                    <strong className={styles.monthUsage}>
                      {uniqueItem.MONTH_USAGE}
                    </strong>{" "}
                    consumiu{" "}
                  </span>
                  <span className={styles.span}>
                    <strong className={styles.monthlyUsage}>
                      {uniqueItem.MONTHLY_USAGE}
                    </strong>{" "}
                    o que convertido em dinheiro é: {" "}
                    <strong className={styles.monthlyUsageE}>
                      {uniqueItem.MONTHLY_USAGEE}
                    </strong>
                  </span>
                </li>
              ))}
            </ul>
          </Scrollbars>
        </div>



        <div className={styles.header}>
          <img
            className={styles.notificationsIcon}
            alt=""
            src="/notifications.svg"
            onClick={openNotifications}
          />
          <b className={styles.dashboard1}>Relatórios</b>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.settings} onClick={onSettingsContainerClick}>
            <div className={styles.settings1}>Definições</div>
          </div>
          <div className={styles.help} onClick={onHelpContainerClick}>
            <div className={styles.help1}>Ajuda</div>
          </div>
          <div className={styles.menu}>
            <div className={styles.profile} onClick={onProfileContainerClick}>
              <div className={styles.reportsTexto}>Perfil</div>
            </div>
            <div className={styles.dashboard2}>
              <div className={styles.reportsTexto1}>Relatórios</div>
            </div>
            <div
              className={styles.dashboard3}
              onClick={onDashboardContainerClick}
            >
              <div className={styles.reportsTexto}>Dashboards</div>
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
