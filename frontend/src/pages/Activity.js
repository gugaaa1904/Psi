import { useState, useCallback } from "react";
import Notifications from "../components/Notifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Activity.module.css";

const Activity = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const onBackButtonIconClick = useCallback(() => {
    navigate("/dashboard");
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
      <div className={styles.activity}>
        <div className={styles.content}>
          <div className={styles.activity1}>
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/background6.svg"
            />
            <img
              className={styles.backButtonIcon}
              alt=""
              src="/back-button1.svg"
              onClick={onBackButtonIconClick}
            />
            <img className={styles.lineIcon} alt="" src="/line2.svg" />
            <img
              className={styles.lineChartIcon}
              alt=""
              src="/line-chart1.svg"
            />
            <img
              className={styles.lineIndicatorIcon}
              alt=""
              src="/line-indicator.svg"
            />
            <div className={styles.day}>
              <div className={styles.sun}>Sun</div>
              <div className={styles.mon}>Mon</div>
              <div className={styles.tue}>Tue</div>
              <div className={styles.wed}>Wed</div>
              <div className={styles.thu}>Thu</div>
              <div className={styles.fri}>Fri</div>
              <div className={styles.sat}>Sat</div>
            </div>
            <div className={styles.kwh}>
              <div className={styles.kwh1}>20 kWh</div>
              <div className={styles.kwh2}>15 kWh</div>
              <div className={styles.kwh3}>10 kWh</div>
              <div className={styles.kwh4}>5 kWh</div>
              <div className={styles.kwh5}>0 kWh</div>
            </div>
            <div className={styles.xY}>
              <b className={styles.kwh6}>13 kWh</b>
            </div>
            <select className={styles.weeklyDropDown} id="monthly">
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
            <b className={styles.activity2}>Activity</b>
          </div>
        </div>
        <div className={styles.header}>
          <img
            className={styles.notificationsIcon}
            alt=""
            src="/notifications.svg"
            onClick={openNotifications}
          />
          <b className={styles.dashboard}>Dashboard</b>
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
            <div className={styles.dashboard1}>
              <b className={styles.dashboard2}>Dashboard</b>
            </div>
            <b className={styles.menu1}>MENU</b>
          </div>
          <div className={styles.line} />
          <div className={styles.line1} />
          <div className={styles.line2} />
          <div className={styles.line3} />
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

export default Activity;
