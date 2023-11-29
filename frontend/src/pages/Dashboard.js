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
          name: "Consuming",
          data: [50, 44, 55, 57, 56, 61, 58, 63, 60, 66, 50, 50],
        },
        {
          name: "Plafond based on Contract",
          data: [50, 76, 85, 101, 98, 87, 105, 91, 114, 94, 50, 50],
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
              <ApexChartClass />
            </div>
            <div className={styles.graph}>
              {/* GOSTAVA QUE O DASHBOARD FICASSE NESTE BLOCO DE CODIGO*/}
            </div>
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
            <ApexChartt />
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
