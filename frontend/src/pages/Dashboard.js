import React, { useState, useCallback } from "react";
import Notifications from "../components/Notifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [series, setSeries] = useState([
    {
      name: "Consuming",
      data: [10, 41, 35, 51, 49, 62, 69],
    },
  ]);

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
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
  });

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

class ApexChartClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
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
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        yaxis: {
          title: {
            text: "$ (thousands)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
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

  const onVariationBasedOnContractClick = useCallback(() => {
    navigate("/variation-based-on-contract");
  }, [navigate]);

  const onActivityContainerClick = useCallback(() => {
    navigate("/activity");
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
            </div>
            <div className={styles.graph}>
              {/* GOSTAVA QUE O DASHBOARD FICASSE NESTE BLOCO DE CODIGO*/}
              <ApexChartClass />
            </div>

            <select className={styles.months} id="meses">
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <div
            className={styles.variationBasedOnContract}
            onClick={onVariationBasedOnContractClick}
          >
            <div className={styles.bigCard1}>
              <div className={styles.bigCardChild} />
            </div>
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/background7.svg"
            />
            <div className={styles.kwhCompletionRate}>
              <div className={styles.percentage}>
                <div className={styles.sinceLastMonth}>
                  +2,5% since last month
                </div>
                <b className={styles.b}>85%</b>
              </div>
              <div className={styles.kwhCompletionRate1}>
                kWh Completion Rate - Contract
              </div>
            </div>
            <div className={styles.months1}>
              <div className={styles.jan}>Jan</div>
              <div className={styles.feb}>Feb</div>
              <div className={styles.mar}>Mar</div>
              <div className={styles.apr}>Apr</div>
              <div className={styles.may}>May</div>
              <div className={styles.jun}>Jun</div>
              <div className={styles.jul}>Jul</div>
              <div className={styles.aug}>Aug</div>
              <div className={styles.sep}>Sep</div>
              <div className={styles.oct}>Oct</div>
              <div className={styles.nov}>Nov</div>
              <div className={styles.dec}>Dec</div>
            </div>
            <img className={styles.graphIcon} alt="" src="/graph2.svg" />
            <b className={styles.variationBasedOn}>
              Variation based on Contract
            </b>
            <div className={styles.div6}>100%</div>
          </div>
          <div className={styles.power}>
            <div className={styles.bigCard2}>
              <div className={styles.bigCardChild} />
            </div>
            <div className={styles.powerChild} />
            <div className={styles.powerInKwhContainer}>
              <p className={styles.kwh}>1526 kWh</p>
              <p className={styles.blankLine}>&nbsp;</p>
            </div>
            <select className={styles.monthsDropDown} id="meses">
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
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
          <div className={styles.activity} onClick={onActivityContainerClick}>
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
