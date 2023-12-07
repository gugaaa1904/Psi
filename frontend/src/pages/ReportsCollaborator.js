import Notifications from "../components/Notifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./ReportsCollaborator.module.css";
import React, { useState, useEffect, useCallback , Component } from "react";
import ReactApexChart from "react-apexcharts";
import axios from 'axios';

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
    xaxis: {
      categories: [], // Preencheremos isso com os valores da coluna "DAY"
    },
  });

  // Função para buscar dados do servidor
  const fetchData = useCallback(async () => {
    try {
      // Substitua a URL abaixo pela URL correta do seu arquivo PHP
      const collaboratorId = sessionStorage.getItem('collaborator_id');
      const response = await axios.get(`http://localhost/Psi/backend/services/report.php?collaborator_id=${collaboratorId}`);
      console.log(response.data);
      // Extrai os dados da resposta
      const dataFromServer = response.data;

      // Atualiza o estado da série com os dados do servidor
      setSeries([
        {
          name: 'Consuming',
          data: dataFromServer.map(item => item.DAILY_USAGE), // Usamos os valores da coluna "DAILY_USAGE" no eixo Y
        },
      ]);

      // Atualiza o estado das opções com os valores da coluna "DAY" no eixo X
      setOptions(prevOptions => ({
        ...prevOptions,
        xaxis: {
          ...prevOptions.xaxis,
          categories: dataFromServer.map(item => item.DAY), // Usamos os valores da coluna "DAY" no eixo X
        },
      }));
    } catch (error) {
      console.error('Erro ao buscar dados do servidor:', error);
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
      const collaboratorId = sessionStorage.getItem('collaborator_id');
      const response = await axios.get(`http://localhost/Psi/backend/services/report.php?collaborator_id=${collaboratorId}`);
      const dataFromServer = response.data;

      // Preencher o array de Consuming multiplicando por 2.5
      const consumingData = dataFromServer.map((item) => item.MONTHLY_USAGE * 2.5);

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


const ReportsCollaborator = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState(1); // Valor padrão ou vazio
  const [monthlyUsageData, setMonthlyUsageData] = useState([]);

  const onActivityContainerClick = useCallback(() => {
    navigate("/activity");
  }, [navigate]);

  const onVariationBasedOnContractClick = useCallback(() => {
    navigate("/variation-based-on-contract");
  }, [navigate]);

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

  const onTimelinesContainerClick = useCallback(() => {
    navigate("/timeline");
  }, [navigate]);

  const onDashboardContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collaboratorId = sessionStorage.getItem('collaborator_id');
        console.log(selectedMonth);
        const response = await fetch(
          "http://localhost/Psi/backend/services/reportpowermonthly.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ collaborator_id: collaboratorId, month: selectedMonth }),
          }
        )
          
        const data = await response.json();

        console.log('Data from server:', data); // Adiciona esta linha para verificar a estrutura dos dados
  
        if (data.status === 'sucess') {
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
          console.error(`Erro ao obter dados para o mês ${selectedMonth}:`, data.error);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
  
    fetchData();
  }, [selectedMonth])

  

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <>
      <div className={styles.reportsCollaborator}>
        <div className={styles.content}>
          <div className={styles.fullReport}>
            <div className={styles.fullReportChild} />
            <b className={styles.analysisTheBlue}>
              Analysis: The blue bar is correlated with the plafond of the
              user´s contract, based on the “Variation Based on Contract”
              graphic, this is a specific month version.
            </b>
            <b className={styles.analysisTheAccumulated}>
              Analysis: The accumulated energy used since the first day of the
              month until the last day of the month, if the value is above 1000
              kWh the user needs to be careful with the number of charges and
              how long the plug is on.
            </b>
            
            <b className={styles.analysisIfTheContainer1}>
              <p className={styles.analysisIfThe}>
                Analysis: If the socket is consuming 0 KwH and has not been
                switched on, the value shown in the line graph represents what
                the socket has consumed over the week.
              </p>
            </b>
            <b className={styles.report}>Report</b>
            <div className={styles.power}>
              <div className={styles.bigCard}>
                <div className={styles.bigCardChild} />
              </div>
              <div className={styles.powerChild} />
              <div>
              <div className={styles.powerChild} />
              <div className={styles.powerInKwhContainer}>
                <p className={styles.kwh}>{monthlyUsageData.length > 0
                  ? `${monthlyUsageData[0].MONTHLY_USAGE} kWh`
                  : 'Loading...'}</p>
                <p className={styles.blankLine}>&nbsp;</p>
              </div>
              <select className={styles.monthsDropDown} id="meses" onChange={handleMonthChange} value={selectedMonth} style={{ zIndex: 9999 }}>
                {/* Gera as opções do select usando os nomes dos meses */}
                {monthNames.map((monthName, index) => (
                  <option key={index} value={index + 1}>{monthName}</option>
                ))}
              </select>
            </div>
              <div className={styles.nbChartsGauge5Wrapper}>
                <div className={styles.gauge2Icon}>
                  <img
                    className={styles.gauge2Icon}
                    alt=""
                    src="/gauge-2.svg"
                  />
                  <img
                    className={styles.divider11Icon}
                    alt=""
                    src="/divider-11.svg"
                  />
                  <img
                    className={styles.divider40Icon}
                    alt=""
                    src="/divider-40.svg"
                  />
                  <img
                    className={styles.point3Icon}
                    alt=""
                    src="/point-3.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.monthlyExpenses}>
              <ApexChartClass />
            </div>
            <div className={styles.activity} onClick={onActivityContainerClick}>
              <ApexChart />
            </div>
            <div
              className={styles.variationBasedOnContract}
              onClick={onVariationBasedOnContractClick}
            >
              <div className={styles.bigCard3}>
                <div className={styles.rectangleDiv} />
              </div>
              <img
                className={styles.backgroundIcon1}
                alt=""
                src="/background1.svg"
              />
              <div className={styles.kwhCompletionRate} />
            </div>
          </div>
          <div className={styles.header}>
            <img
              className={styles.notificationsIcon}
              alt=""
              src="/notifications.svg"
              onClick={openNotifications}
            />
            <b className={styles.reports}>Reports</b>
          </div>
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
            <div className={styles.reports1}>
              <b className={styles.reportsTexto}>
                <span className={styles.rep}>Rep</span>o
                <span className={styles.rep}>rts</span>
              </b>
            </div>
            <div
              className={styles.timelines}
              onClick={onTimelinesContainerClick}
            >
              <div className={styles.profile1}>Timelines</div>
            </div>
            <div
              className={styles.dashboard}
              onClick={onDashboardContainerClick}
            >
              <div className={styles.profile1}>Dashboard</div>
            </div>
            <b className={styles.menu1}>MENU</b>
          </div>
          <div className={styles.line6} />
          <div className={styles.line7} />
          <div className={styles.line8} />
          <div className={styles.line9} />
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

export default ReportsCollaborator;
