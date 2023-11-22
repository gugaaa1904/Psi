import { useState, useCallback } from "react";
import Notifications from "../components/Notifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./ReportsCollaborator.module.css";

const ReportsCollaborator = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();

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
            <b className={styles.analysisIfTheContainer}>
              <p className={styles.analysisIfThe}>
                Analysis: If the line is below the 100% mark means the user
                spent below the contract´s plafond, and above the 100% mark
                means the user spent more then the contract plafond.
              </p>
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
              <div className={styles.kwh}>
                <p className={styles.analysisIfThe}>1526 kWh</p>
                <p className={styles.blankLine}>&nbsp;</p>
              </div>
              <b className={styles.power1}>Power</b>
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
                  <div className={styles.txts11}>
                    <div className={styles.div}>0</div>
                    <div className={styles.div1}>6</div>
                    <div className={styles.w}>w</div>
                    <div className={styles.div2}>18</div>
                    <div className={styles.div3}>24</div>
                    <div className={styles.div4}>30</div>
                    <div className={styles.div5}>36</div>
                    <div className={styles.div6}>42</div>
                    <div className={styles.div7}>48</div>
                    <div className={styles.div8}>54</div>
                    <div className={styles.div9}>60</div>
                  </div>
                  <img
                    className={styles.point3Icon}
                    alt=""
                    src="/point-3.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.monthlyExpenses}>
              <div className={styles.bigCard1}>
                <div className={styles.bigCardChild} />
              </div>
              <div className={styles.november}>November</div>
              <div className={styles.monthlyExpenses1}>Monthly Expenses</div>
              <div className={styles.line}>
                <div className={styles.line1} />
                <div className={styles.line2} />
                <div className={styles.line3} />
                <div className={styles.line4} />
                <div className={styles.line5} />
                <div className={styles.julBar2} />
                <div className={styles.julBar} />
              </div>
              <div className={styles.div10}>50€</div>
              <div className={styles.div11}>25€</div>
              <div className={styles.div12}>0€</div>
              <div className={styles.div13}>100€</div>
              <div className={styles.div14}>75€</div>
            </div>
            <div className={styles.activity} onClick={onActivityContainerClick}>
              <div className={styles.bigCard2}>
                <div className={styles.bigCardChild} />
              </div>
              <img
                className={styles.backgroundIcon}
                alt=""
                src="/background.svg"
              />
              <img className={styles.lineIcon} alt="" src="/line.svg" />
              <img
                className={styles.lineChartIcon}
                alt=""
                src="/line-chart.svg"
              />
              <div className={styles.days}>
                <div className={styles.sun}>Sun</div>
                <div className={styles.mon}>Mon</div>
                <div className={styles.tue}>Tue</div>
                <div className={styles.wed}>Wed</div>
                <div className={styles.thu}>Thu</div>
                <div className={styles.fri}>Fri</div>
                <div className={styles.sat}>Sat</div>
              </div>
              <div className={styles.kwh2}>
                <div className={styles.kwh3}>20 kWh</div>
                <div className={styles.kwh4}>15 kWh</div>
                <div className={styles.kwh5}>10 kWh</div>
                <div className={styles.kwh6}>5 kWh</div>
                <div className={styles.kwh7}>0 kWh</div>
              </div>
              <b className={styles.activity1}>Activity</b>
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
              <div className={styles.months}>
                <div className={styles.jan}>Jan</div>
                <div className={styles.jan}>Feb</div>
                <div className={styles.jan}>Mar</div>
                <div className={styles.jan}>Apr</div>
                <div className={styles.jan}>May</div>
                <div className={styles.jan}>Jun</div>
                <div className={styles.jan}>Jul</div>
                <div className={styles.jan}>Aug</div>
                <div className={styles.jan}>Sep</div>
                <div className={styles.jan}>Oct</div>
                <div className={styles.jan}>Nov</div>
                <div className={styles.jan}>Dec</div>
              </div>
              <div className={styles.percentage}>
                <div className={styles.sinceLastMonth}>
                  +2,5% since last month
                </div>
                <b className={styles.b}>85%</b>
              </div>
              <div className={styles.kwhCompletionRate1}>
                kWh Completion Rate - Contract
              </div>
              <img className={styles.graphIcon} alt="" src="/graph.svg" />
              <b className={styles.variationBasedOn}>
                Variation based on Contract
              </b>
              <div className={styles.div15}>100%</div>
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
          <img className={styles.logo1Icon} alt="" src="/logo-12@2x.png" />
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
