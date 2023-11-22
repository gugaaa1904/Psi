import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CollaboratorInfo.module.css";

const CollaboratorInfo = () => {
  const navigate = useNavigate();

  const onMaxPowerAchieved1Click = useCallback(() => {
    navigate("/minmax-power-achived");
  }, [navigate]);

  const onMinPowerAchieved1Click = useCallback(() => {
    navigate("/minmax-power-achived");
  }, [navigate]);

  const onAverageCostIn1Click = useCallback(() => {
    navigate("/average-cost-in");
  }, [navigate]);

  const onAverageEnergyConsumptionInClick = useCallback(() => {
    navigate("/average-energy-consumption-in-kw");
  }, [navigate]);

  const onListOfCollaborators1Click = useCallback(() => {
    navigate("/full-reports-collaborators");
  }, [navigate]);

  const onGeneralConsumingContainerClick = useCallback(() => {
    navigate("/general-consuming");
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
    <div className={styles.collaboratorInfo}>
      <div className={styles.content}>
        <div
          className={styles.maxPowerAchieved}
          onClick={onMaxPowerAchieved1Click}
        >
          <div className={styles.bigCard}>
            <div className={styles.bigCardChild} />
          </div>
          <div className={styles.bg} />
          <div className={styles.percentage}>+8% since yesterday</div>
          <div className={styles.numberOfCollaborators}>2 Collaborators</div>
          <div className={styles.data}>5kW</div>
          <img className={styles.redIcon} alt="" src="/red-icon1.svg" />
          <div className={styles.maxPowerAchieved1}>Max Power Achieved</div>
        </div>
        <div
          className={styles.minPowerAchieved}
          onClick={onMinPowerAchieved1Click}
        >
          <div className={styles.bigCard}>
            <div className={styles.bigCardChild} />
          </div>
          <div className={styles.bg1} />
          <div className={styles.percentage1}>-11,2% since yesterday</div>
          <div className={styles.numberOfCollaborators1}>2 Collaborators</div>
          <div className={styles.data1}>1 kW</div>
          <div className={styles.minPowerAchieved1}>Min Power Achieved</div>
          <img className={styles.greenIcon} alt="" src="/green-icon.svg" />
        </div>
        <div className={styles.averageCostIn} onClick={onAverageCostIn1Click}>
          <div className={styles.bigCard2}>
            <div className={styles.bigCardChild} />
          </div>
          <div className={styles.backgroundCopy2} />
          <div className={styles.data2}>€0.85 per kWh</div>
          <div className={styles.averageCostIn1}>{`Average Cost in € `}</div>
        </div>
        <div
          className={styles.averageEnergyConsumptionIn}
          onClick={onAverageEnergyConsumptionInClick}
        >
          <div className={styles.bigCard2}>
            <div className={styles.bigCardChild} />
          </div>
          <div className={styles.backgroundCopy2} />
          <div className={styles.data3}>0.2 kWh</div>
          <div
            className={styles.averageEnergyConsumption}
          >{`Average Energy Consumption in kWh `}</div>
        </div>
        <div
          className={styles.listOfCollaborators}
          onClick={onListOfCollaborators1Click}
        >
          <div className={styles.bigCard4}>
            <div className={styles.bigCardChild} />
          </div>
          <div className={styles.backgroundCopy2} />
          <div className={styles.employee4}>
            <div className={styles.bigCard5}>
              <div className={styles.bigCardChild} />
            </div>
            <div className={styles.employee4Child} />
            <b className={styles.name}>Nuno Bernardino</b>
            <div className={styles.position}>
              <p className={styles.dhlEmployee}>DHL - Employee</p>
            </div>
            <img
              className={styles.image21Icon}
              alt=""
              src="/image-211@2x.png"
            />
          </div>
          <div className={styles.employee3}>
            <div className={styles.bigCard5}>
              <div className={styles.bigCardChild} />
            </div>
            <div className={styles.employee4Child} />
            <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
            <b className={styles.name}>Diogo Correia</b>
            <div className={styles.position}>
              <p className={styles.dhlEmployee}>DHL - Employee</p>
            </div>
          </div>
          <div className={styles.employee2}>
            <div className={styles.bigCard5}>
              <div className={styles.bigCardChild} />
            </div>
            <div className={styles.employee4Child} />
            <b className={styles.name}>João Santos</b>
            <div className={styles.position}>
              <p className={styles.dhlEmployee}>DHL - Employee</p>
            </div>
            <img className={styles.image21Icon} alt="" src="/image-19@2x.png" />
          </div>
          <div className={styles.employee}>
            <div className={styles.bigCard5}>
              <div className={styles.bigCardChild} />
            </div>
            <div className={styles.employee4Child} />
            <b className={styles.name}>Afonso Mendes</b>
            <div className={styles.position}>
              <p className={styles.dhlEmployee}>DHL - Employee</p>
            </div>
            <img className={styles.image21Icon} alt="" src="/image-20@2x.png" />
          </div>
          <div className={styles.listOfCollaborators1}>
            List of Collaborators
          </div>
        </div>
        <div
          className={styles.generalConsuming}
          onClick={onGeneralConsumingContainerClick}
        >
          <div className={styles.bigCard9}>
            <div className={styles.bigCardChild} />
          </div>
          <div className={styles.background} />
          <div className={styles.graph}>
            <div className={styles.graph1}>
              <div className={styles.kwhAndLines}>
                <img
                  className={styles.path2Copy}
                  alt=""
                  src="/path-2-copy.svg"
                />
                <img className={styles.path2Icon} alt="" src="/path-2.svg" />
                <img
                  className={styles.path2Copy2}
                  alt=""
                  src="/path-2-copy-2.svg"
                />
                <img
                  className={styles.path2Copy3}
                  alt=""
                  src="/path-2-copy-3.svg"
                />
                <img
                  className={styles.path2Copy4}
                  alt=""
                  src="/path-2-copy-4.svg"
                />
                <img
                  className={styles.path2Copy5}
                  alt=""
                  src="/path-2-copy-5.svg"
                />
                <div className={styles.k}>50kWh</div>
                <div className={styles.k1}>40kWh</div>
                <div className={styles.k2}>20kWh</div>
                <div className={styles.k3}>30kWh</div>
                <div className={styles.k4}>10kWh</div>
                <div className={styles.div}>0kWh</div>
              </div>
              <div className={styles.monday}>Monday</div>
              <div className={styles.tuesday}>Tuesday</div>
              <div className={styles.wednesday}>Wednesday</div>
              <div className={styles.thursday}>Thursday</div>
              <div className={styles.friday}>Friday</div>
              <div className={styles.saturday}>Saturday</div>
              <div className={styles.sunday}>Sunday</div>
              <div className={styles.monday1}>
                <div className={styles.rectangleCopy8} />
                <div className={styles.rectangleCopy9} />
              </div>
              <div className={styles.tuesday1}>
                <div className={styles.rectangleCopy8} />
                <div className={styles.rectangleCopy91} />
              </div>
              <div className={styles.wednesday1}>
                <div className={styles.rectangleCopy82} />
                <div className={styles.rectangleCopy92} />
              </div>
              <div className={styles.thursday1}>
                <div className={styles.rectangleCopy8} />
                <div className={styles.rectangleCopy93} />
              </div>
              <div className={styles.friday1}>
                <div className={styles.rectangleCopy8} />
                <div className={styles.rectangleCopy94} />
              </div>
              <div className={styles.saturday1}>
                <div className={styles.rectangleCopy85} />
                <div className={styles.rectangleCopy95} />
              </div>
              <div className={styles.sunday1}>
                <div className={styles.rectangleCopy8} />
                <div className={styles.rectangleCopy96} />
              </div>
              <div className={styles.expected}>
                <div className={styles.onlineSalesParent}>
                  <div className={styles.onlineSales}>Expected</div>
                  <div className={styles.rectangleCopy3} />
                </div>
              </div>
              <div className={styles.actuallyCharged}>
                <div className={styles.rectangleCopy5} />
                <div className={styles.rectangleCopy31} />
                <div className={styles.offlineSales}>Actually Charged</div>
              </div>
            </div>
            <div className={styles.generalConsuming1}>General Consuming</div>
          </div>
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
          <div className={styles.collaboratorInformation1}>
            <b className={styles.colaboratorInformation}>
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

export default CollaboratorInfo;
