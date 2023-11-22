import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GeneralConsuming.module.css";

const GeneralConsuming = () => {
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
    <div className={styles.generalConsuming}>
      <div className={styles.content}>
        <div className={styles.generalConsuming1}>
          <div className={styles.generalConsuming2}>General Consuming</div>
          <div className={styles.averageChargingAnd}>
            Average Charging and Consuming Data of all the Collaborators in the
            last Week
          </div>
          <div className={styles.graph}>
            <img className={styles.linesIcon} alt="" src="/lines.svg" />
            <div className={styles.kw}>
              <div className={styles.kw1}>50kW</div>
              <div className={styles.kw2}>40kW</div>
              <div className={styles.kw3}>20kW</div>
              <div className={styles.kw4}>30kW</div>
              <div className={styles.kw5}>10kW</div>
              <div className={styles.div}>0kW</div>
            </div>
            <div className={styles.expected}>
              <div className={styles.blueBall} />
              <div className={styles.expected1}>Expected</div>
            </div>
            <div className={styles.actuallyCharged}>
              <div className={styles.actuallyCharged1}>Actually Charged</div>
              <div className={styles.greenBall} />
              <div className={styles.redBall} />
            </div>
            <div className={styles.monday}>
              <div className={styles.rectangleCopy8} />
              <div className={styles.rectangleCopy9} />
              <div className={styles.monday1}>Monday</div>
            </div>
            <div className={styles.tuesday}>
              <div className={styles.rectangleCopy81} />
              <div className={styles.rectangleCopy91} />
              <div className={styles.tuesday1}>Tuesday</div>
            </div>
            <div className={styles.wednesday}>
              <div className={styles.rectangleCopy82} />
              <div className={styles.rectangleCopy92} />
              <div className={styles.wednesday1}>Wednesday</div>
            </div>
            <div className={styles.thursday}>
              <div className={styles.rectangleCopy83} />
              <div className={styles.rectangleCopy93} />
              <div className={styles.thursday1}>Thursday</div>
            </div>
            <div className={styles.friday}>
              <div className={styles.rectangleCopy84} />
              <div className={styles.rectangleCopy94} />
              <div className={styles.friday1}>Friday</div>
            </div>
            <div className={styles.saturday}>
              <div className={styles.rectangleCopy85} />
              <div className={styles.rectangleCopy95} />
              <div className={styles.saturday1}>Saturday</div>
            </div>
            <div className={styles.sunday}>
              <div className={styles.rectangleCopy86} />
              <div className={styles.rectangleCopy96} />
              <div className={styles.sunday1}>Sunday</div>
            </div>
          </div>
          <img
            className={styles.backButtonIcon}
            alt=""
            src="/back-button1.svg"
            onClick={onBackButtonIconClick}
          />
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
        <div className={styles.line} />
        <div className={styles.line1} />
        <div className={styles.line2} />
        <div className={styles.line3} />
        <img className={styles.logo1Icon} alt="" src="/logo-12@2x.png" />
      </div>
    </div>
  );
};

export default GeneralConsuming;
