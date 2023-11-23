import { useState, useCallback } from "react";
import Notifications from "../components/Notifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./VariationBasedOnContract.module.css";

const VariationBasedOnContract = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const onVariationBasedOnContractClick = useCallback(() => {
    navigate("/variation-based-on-contract");
  }, [navigate]);

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
      <div className={styles.variationBasedOnContract}>
        <div className={styles.content}>
          <div
            className={styles.variationBasedOnContract1}
            onClick={onVariationBasedOnContractClick}
          >
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/background5.svg"
            />
            <div className={styles.kwhCompletionRate}>
              <div className={styles.percentage}>
                <b className={styles.b}>85%</b>
              </div>
              <div className={styles.kwhCompletionRate1}>
                kWh Completion Rate - Contract
              </div>
            </div>
            <div className={styles.months}>
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
            <img className={styles.graphIcon} alt="" src="/graph1.svg" />
            <b className={styles.variationBasedOn}>
              Variation based on Contract
            </b>
            <div className={styles.div}>100%</div>
            <img
              className={styles.backButtonIcon}
              alt=""
              src="/back-button1.svg"
              onClick={onBackButtonIconClick}
            />
          </div>
          <div className={styles.sinceLastMonth}>+2,5% since last month</div>
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

export default VariationBasedOnContract;
