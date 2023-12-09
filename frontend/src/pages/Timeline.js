import { useState, useCallback, useEffect } from "react";
import Notifications from "../components/Notifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Timeline.module.css";
import axios from "axios";

const Timeline = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();
  const [timelineData, setTimelineData] = useState([]);
  const [monthlyChargeData, setMonthlyChargeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collaboratorId = sessionStorage.getItem("collaborator_id");
        const response = await axios.get(
          `http://localhost/Psi/backend/services/timeline.php?collaborator_id=${collaboratorId}`
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

  const onDashboardContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  useEffect(() => {
    // Função para obter dados do backend
    const fetchData = async () => {
      try {
        const collaboratorId = sessionStorage.getItem("collaborator_id");
        const response = await axios.get(
          `http://localhost/Psi/backend/services/timeline2.php?collaborator_id=${collaboratorId}`
        );
        setMonthlyChargeData(response.data);
      } catch (error) {
        console.error("Erro ao obter dados do backend:", error);
      }
    };

    fetchData(); // Chama a função ao montar o componente
  }, []);

  return (
    <>
      <div className={styles.timeline}>
        <div className={styles.content}>
          <div className={styles.numberOfChargesMadeMonthly}>
            <b className={styles.numberOfCharges}>
              Number of Charges Made Monthly
            </b>
            <div className={styles.line} />

            <ul className={styles.november5October6Septembb}>
              {monthlyChargeData.map((monthData, index) => (
                <li key={index} className={styles.noData}>
                  <span>{`${monthData.DATE_USAGE}: `}</span>
                  <span className={styles.span}>{monthData.TOTAL_CHARGES}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.historyOfCharges}>
            <img
              className={styles.backgroundIcon1}
              alt=""
              src="/background3.svg"
            />
            <b className={styles.historyOfCharges1}>History of Charges</b>
            <div className={styles.line} />
            <div className={styles.tuesday23Container}>
              <ul className={styles.november5October6Septemb}>
                {timelineData.map((item) => (
                  <li key={item.DATE_USAGE}>
                    <span>{item.DATE_USAGE} - </span>
                    <span className={styles.span}>{item.DAILY_USAGE}</span>
                  </li>
                ))}
              </ul>
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
          <b className={styles.timelines}>Timelines</b>
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
            <div className={styles.timelines1}>
              <b className={styles.timelines2}>Timelines</b>
            </div>
            <div
              className={styles.dashboard}
              onClick={onDashboardContainerClick}
            >
              <div className={styles.reportsTexto}>Dashboard</div>
            </div>
            <b className={styles.menu1}>MENU</b>
          </div>
          <div className={styles.line2} />
          <div className={styles.line3} />
          <div className={styles.line4} />
          <div className={styles.line5} />
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

export default Timeline;
