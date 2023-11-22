import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AverageEnergyConsumptionIn.module.css";

const AverageEnergyConsumptionIn = () => {
  const navigate = useNavigate();

  const onBackButtonIconClick = useCallback(() => {
    navigate("/collaborator-info");
  }, [navigate]);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-hr");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/help-hr");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/profile-hr");
  }, [navigate]);

  const onRemoveColaboratorContainerClick = useCallback(() => {
    navigate("/remove-colaborator");
  }, [navigate]);

  const onAddColaboratorContainerClick = useCallback(() => {
    navigate("/add-colaborator");
  }, [navigate]);

  return (
    <div className={styles.averageEnergyConsumptionIn}>
      <div className={styles.content}>
        <div className={styles.averageEnergyConsumptionIn1}>
          <img
            className={styles.backButtonIcon}
            alt=""
            src="/back-button.svg"
            onClick={onBackButtonIconClick}
          />
          <div className={styles.graph}>
            <div className={styles.line} />
            <div className={styles.lastMonth}>
              <img className={styles.redIcon} alt="" src="/red-icon.svg" />
              <div className={styles.lastMonth1}>Last Month</div>
              <div className={styles.data}>40 Kw</div>
            </div>
            <div className={styles.expected}>
              <div className={styles.lastMonth1}>Expected</div>
              <div className={styles.data}>34 Kw</div>
              <img className={styles.redIcon} alt="" src="/blue-icon.svg" />
            </div>
            <div className={styles.line1}>
              <div className={styles.rectangle} />
            </div>
            <img className={styles.graphChild} alt="" src="/group-17.svg" />
            <img className={styles.graphItem} alt="" src="/group-16.svg" />
          </div>
          <div className={styles.averageEnergyConsuming}>
            Average Energy Consuming Data of all the Collaborators in the last
            Month
          </div>
          <div
            className={styles.averageEnergyConsumption}
          >{`Average Energy Consumption in Kw `}</div>
        </div>
        <div className={styles.generalOverview}>
          <div className={styles.divider} />
          <div className={styles.generalOverview1}>General Overview</div>
        </div>
      </div>
      <div className={styles.header}>
        <b className={styles.collaboratorInformation}>
          Collaborator Information
        </b>
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
          <div className={styles.colaboratorInformation}>
            <b className={styles.colaboratorInformation1}>
              Collaborator Information
            </b>
          </div>
          <div
            className={styles.removeColaborator}
            onClick={onRemoveColaboratorContainerClick}
          >
            <div className={styles.profile1}>Remove Colaborator</div>
          </div>
          <div
            className={styles.addColaborator}
            onClick={onAddColaboratorContainerClick}
          >
            <div className={styles.profile1}>Add Colaborator</div>
          </div>
          <b className={styles.menu1}>MENU</b>
        </div>
        <div className={styles.line2} />
        <div className={styles.line3} />
        <div className={styles.line4} />
        <div className={styles.line5} />
        <img className={styles.logo1Icon} alt="" src="/logo-12@2x.png" />
      </div>
    </div>
  );
};

export default AverageEnergyConsumptionIn;
