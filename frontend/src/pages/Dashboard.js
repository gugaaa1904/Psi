import React, { useState, useEffect, useCallback , Component } from "react";
import Notifications from "../components/Notifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
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
      const response = await axios.get('http://localhost/Psi/backend/services/consuming.php');
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
      const response = await axios.get('http://localhost/Psi/backend/services/consuming.php');
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

class ApexChartt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Percentage of Consumption",
          data: [120, 122, 96, 95, 150, 26, 81, 80, 120, 76, 134, 80],
        },
        {
          name: "100%",
          data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        },
      ],
      options: {
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
          width: [5, 7, 5],
          curve: "straight",
          dashArray: [0, 8, 5],
        },
        title: {
          text: "Variation based on Contract",
          align: "center",
          style: {
            fontFamily: "Inter, sans-serif",
          },
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              " - " +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              ""
            );
          },
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dez",
          ],
        },
        yaxis: {
          title: {
            text: " % (PERCENTAGE) ",
          },
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " (mins)";
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val + " per session";
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                },
              },
            },
          ],
        },
        grid: {
          borderColor: "#f1f1f1",
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost/Psi/backend/services/consuming.php?month=${selectedMonth}`);
        const data = await response.json();

        if (data.length > 0) {
          setMonthlyUsageData(data);
        } else {
          console.error(`Nenhum resultado encontrado para o mês ${selectedMonth}`);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [selectedMonth]); // Execute sempre que o mês selecionado mudar

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

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
          <div
            className={styles.variationBasedOnContract}
          >
            <div className={styles.bigCard1}>
              <div className={styles.bigCardChild} />
            </div>
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/background7.svg"
            />
            <ApexChartt />
          </div>
          <div className={styles.power}>
            <div className={styles.bigCard2}>
              <div className={styles.bigCardChild} />
            </div>
            <div>
              <div className={styles.powerChild} />
              <div className={styles.powerInKwhContainer}>
                <p className={styles.kwh}>{monthlyUsageData.length > 0 ? `${monthlyUsageData[0].MONTHLY_USAGE} kWh` : 'Loading...'}</p>
                <p className={styles.blankLine}>&nbsp;</p>
              </div>
              <select className={styles.monthsDropDown} id="meses" onChange={handleMonthChange} value={selectedMonth}>
                {/* Gera as opções do select usando os nomes dos meses */}
                {monthNames.map((monthName, index) => (
                  <option key={index} value={index + 1}>{monthName}</option>
                ))}
              </select>
            </div>
            <div className={styles.graph1}>
              <div className={styles.gauge2Icon}>
                <img className={styles.gauge2Icon} alt="" src="/gauge-21.svg" />
                <img
                  className={styles.divider11Icon}
                  alt=""
                  src="/divider-111.svg"
                />
                <img
                  className={styles.divider40Icon}
                  alt=""
                  src="/divider-401.svg"
                />
                <img className={styles.point3Icon} alt="" src="/point-31.svg" />
              </div>
            </div>
            <b className={styles.power1}>Power</b>
          </div>
          <div className={styles.activity}>
            <div className={styles.bigCard3}>
              <div className={styles.bigCardChild} />
            </div>
            <img
              className={styles.backgroundIcon1}
              alt=""
              src="/background.svg"
            />
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