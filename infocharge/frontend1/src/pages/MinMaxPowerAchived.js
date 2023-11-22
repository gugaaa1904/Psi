import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MinMaxPowerAchived.module.css";

const MinMaxPowerAchived = () => {
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
    <div className={styles.minmaxPowerAchived}>
      <div className={styles.content}>
        <div className={styles.minMaxEnergyAchieved}>
          <div className={styles.bg}>
            <div className={styles.shape} />
          </div>
          <img
            className={styles.backButtonIcon}
            alt=""
            src="/back-button.svg"
            onClick={onBackButtonIconClick}
          />
          <div className={styles.maxCollaborators}>
            <div className={styles.backgroundCopy3} />
            <div className={styles.maxCollaborators1}>
              Max Collaborators: João Santos
            </div>
          </div>
          <div className={styles.minCollaborators}>
            <div className={styles.backgroundCopy2} />
            <div className={styles.maxCollaborators1}>
              Min Collaborators: Gonçalo Custódio
            </div>
          </div>
          <div
            className={styles.theMinimumGreen}
          >{`The Minimum (Green) and Maximum (Red) Energy transfered by each of the Collaborators plug during last week. `}</div>
          <div className={styles.max}>
            <div className={styles.div}>5kW</div>
            <div className={styles.targetSalesParent}>
              <div className={styles.targetSales}>MAX</div>
              <div className={styles.commercial}>Energy Transfered</div>
            </div>
            <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
          </div>
          <div className={styles.min}>
            <div className={styles.div1}>1 kW</div>
            <div className={styles.realitySalesParent}>
              <div className={styles.realitySales}>MIN</div>
              <div className={styles.global1}>Energy Transfered</div>
            </div>
            <div className={styles.avatar}>
              <div className={styles.avatarChild} />
              <img
                className={styles.fatArrowDownIcon}
                alt=""
                src="/fatarrowdown.svg"
              />
            </div>
          </div>
          <div className={styles.graph}>
            <div className={styles.graph1}>
              <div className={styles.monday}>
                <div className={styles.monday1}>Monday</div>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.groupItem} />
                </div>
              </div>
              <div className={styles.tuesday}>
                <div className={styles.tuesday1}>Tuesday</div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.groupInner} />
                  <div className={styles.rectangleDiv} />
                </div>
              </div>
              <div className={styles.wednesday}>
                <div className={styles.wednesday1}>Wednesday</div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.groupChild1} />
                  <div className={styles.groupChild2} />
                </div>
              </div>
              <div className={styles.thursday}>
                <div className={styles.thursday1}>Thursday</div>
                <div className={styles.groupDiv}>
                  <div className={styles.groupChild3} />
                  <div className={styles.groupChild4} />
                </div>
              </div>
              <div className={styles.friday}>
                <div className={styles.friday1}>Friday</div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.groupChild5} />
                  <div className={styles.groupChild6} />
                </div>
              </div>
              <div className={styles.saturday}>
                <div className={styles.saturday1}>Saturday</div>
                <div className={styles.rectangleParent2}>
                  <div className={styles.groupChild7} />
                  <div className={styles.groupChild8} />
                </div>
              </div>
              <div className={styles.sunday}>
                <div className={styles.sunday1}>Sunday</div>
                <div className={styles.rectangleParent3}>
                  <div className={styles.groupChild9} />
                  <div className={styles.groupChild10} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.kw}>
            <div className={styles.k}>5 kW</div>
            <div className={styles.k1}>4 kW</div>
            <div className={styles.k2}>2 kW</div>
            <div className={styles.k3}>3 kW</div>
            <div className={styles.k4}>1 kW</div>
            <div className={styles.div2}>0 kW</div>
          </div>
          <div className={styles.minMax}>{`Min & Max Energy Achieved`}</div>
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

export default MinMaxPowerAchived;
