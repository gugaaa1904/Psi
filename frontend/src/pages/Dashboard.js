import { useState, useCallback } from "react";
import Notifications from "../components/Notifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

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
            <div className={styles.month}>November</div>
            <div className={styles.graph}>
              <div className={styles.line} />
              <div className={styles.line1} />
              <div className={styles.line2} />
              <div className={styles.line3} />
              <div className={styles.line4} />
              <div className={styles.julBar2} />
              <div className={styles.julBar} />
            </div>
            <div className={styles.div}>
              <div className={styles.div1}>0€</div>
              <div className={styles.div2}>25€</div>
              <div className={styles.div3}>50€</div>
              <div className={styles.div4}>75€</div>
              <div className={styles.div5}>100€</div>
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
            <div className={styles.monthlyExpenses1}>Monthly Expenses</div>
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
                <div className={styles.txts11}>
                  <div className={styles.div7}>0</div>
                  <div className={styles.div8}>6</div>
                  <div className={styles.w}>w</div>
                  <div className={styles.div9}>18</div>
                  <div className={styles.div10}>24</div>
                  <div className={styles.div11}>30</div>
                  <div className={styles.div12}>36</div>
                  <div className={styles.div13}>42</div>
                  <div className={styles.div14}>48</div>
                  <div className={styles.div15}>54</div>
                  <div className={styles.div16}>60</div>
                </div>
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
            <img className={styles.lineIcon} alt="" src="/line.svg" />
            <img
              className={styles.lineChartIcon}
              alt=""
              src="/line-chart.svg"
            />
            <img
              className={styles.lineIndicatorIcon}
              alt=""
              src="/line-indicator1.svg"
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
            <div className={styles.kwh1}>
              <div className={styles.kwh2}>20 kWh</div>
              <div className={styles.kwh3}>15 kWh</div>
              <div className={styles.kwh4}>10 kWh</div>
              <div className={styles.kwh5}>5 kWh</div>
              <div className={styles.kwh6}>0 kWh</div>
            </div>
            <div className={styles.xY}>
              <b className={styles.kwh7}>13 kWh</b>
            </div>
            <b className={styles.activity1}>Activity</b>
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
