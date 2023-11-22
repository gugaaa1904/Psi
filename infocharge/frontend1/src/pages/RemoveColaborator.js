import { useState, useCallback } from "react";
import PopUpRemoveColaborator from "../components/PopUpRemoveColaborator";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./RemoveColaborator.module.css";

const RemoveColaborator = () => {
  const [isPopUpRemoveColaboratorOpen, setPopUpRemoveColaboratorOpen] =
    useState(false);
  const navigate = useNavigate();

  const openPopUpRemoveColaborator = useCallback(() => {
    setPopUpRemoveColaboratorOpen(true);
  }, []);

  const closePopUpRemoveColaborator = useCallback(() => {
    setPopUpRemoveColaboratorOpen(false);
  }, []);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-hr");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/help-hr");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/profile-hr");
  }, [navigate]);

  const onReportsContainerClick = useCallback(() => {
    navigate("/collaborator-info");
  }, [navigate]);

  const onDashboardContainerClick = useCallback(() => {
    navigate("/add-colaborator");
  }, [navigate]);

  return (
    <>
      <div className={styles.removeColaborator}>
        <div className={styles.content}>
          <div className={styles.contentChild} />
          <div
            className={styles.removeCollaboratorButton}
            onClick={openPopUpRemoveColaborator}
          >
            <b className={styles.button}>Remove Collaborator</b>
          </div>
          <input
            className={styles.email}
            name="Email"
            id="email"
            placeholder="Email"
            type="email"
          />
          <input className={styles.name} placeholder="Name" type="text" />
          <div className={styles.enterTheFields}>
            Enter the fields below to remove a Collaborator:
          </div>
        </div>
        <div className={styles.header}>
          <b className={styles.removeCollaborator}>Remove Collaborator</b>
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
              <div className={styles.reportsTexto}>
                Collaborator Information
              </div>
            </div>
            <div className={styles.timelines}>
              <b className={styles.timelinesTexto}>Remove Colaborator</b>
            </div>
            <div
              className={styles.dashboard}
              onClick={onDashboardContainerClick}
            >
              <div className={styles.reportsTexto}>Add Colaborator</div>
            </div>
            <b className={styles.menu1}>MENU</b>
          </div>
          <div className={styles.line} />
          <div className={styles.line1} />
          <div className={styles.line2} />
          <div className={styles.line3} />
          <img className={styles.logo1Icon} alt="" src="/logo-12@2x.png" />
        </div>
      </div>
      {isPopUpRemoveColaboratorOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closePopUpRemoveColaborator}
        >
          <PopUpRemoveColaborator onClose={closePopUpRemoveColaborator} />
        </PortalPopup>
      )}
    </>
  );
};

export default RemoveColaborator;
