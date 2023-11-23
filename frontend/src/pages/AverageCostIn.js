import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AverageCostIn.module.css";

const AverageCostIn = () => {
  const navigate = useNavigate();

  const onBackButtonIconClick = useCallback(() => {
    navigate("/collaborator-info");
  }, [navigate]);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-admin");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/help-admin");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/profile-admin");
  }, [navigate]);

  const onCompanyInformationContainerClick = useCallback(() => {
    navigate("/company-info");
  }, [navigate]);

  const onRemoveUserContainerClick = useCallback(() => {
    navigate("/remove-user");
  }, [navigate]);

  const onAddUserContainerClick = useCallback(() => {
    navigate("/add-user");
  }, [navigate]);

  return (
    <div className={styles.averageCostIn}>
      <div className={styles.content}>
        <div className={styles.averageCostIn1}>
          <div className={styles.background} />
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          <img
            className={styles.backButtonIcon}
            alt=""
            src="/back-button1.svg"
            onClick={onBackButtonIconClick}
          />
          <div className={styles.lines}>
            <div className={styles.axis} />
            <div className={styles.axis1} />
            <div className={styles.axis2} />
            <div className={styles.axis3} />
            <div className={styles.axis4} />
          </div>
          <div className={styles.monthlyAverageCostInParent}>
            <div className={styles.monthlyAverageCostIn}>
              <div className={styles.monthlyAverageCost}>
                Monthly Average Cost in €
              </div>
              <div className={styles.greenRec} />
            </div>
            <div className={styles.expected}>
              <div className={styles.blueRec} />
              <div className={styles.expected1}>Expected</div>
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
            <div className={styles.sept}>Sept</div>
            <div className={styles.oct}>Oct</div>
            <div className={styles.nov}>Nov</div>
            <div className={styles.des}>Des</div>
          </div>
          <img
            className={styles.specificValueIcon}
            alt=""
            src="/specific-value.svg"
          />
          <img
            className={styles.linesGreenAndBlue}
            alt=""
            src="/lines-green-and-blue.svg"
          />
          <div className={styles.div}>
            <div className={styles.div1}>500</div>
            <div className={styles.div2}>400</div>
            <div className={styles.div3}>300</div>
            <div className={styles.div4}>200</div>
            <div className={styles.div5}>100</div>
            <div className={styles.div6}>0</div>
          </div>
          <div className={styles.averageCostData}>
            Average Cost Data of all the Collaborators in the last Year
          </div>
          <div className={styles.averageCostIn2}>{`Average Cost in € `}</div>
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
            <b className={styles.collaboratorInformation2}>
              Collaborator Information
            </b>
          </div>
          <div
            className={styles.companyInformation}
            onClick={onCompanyInformationContainerClick}
          >
            <div className={styles.profile1}>Company Information</div>
          </div>
          <div
            className={styles.removeUser}
            onClick={onRemoveUserContainerClick}
          >
            <div className={styles.profile1}>Remove User</div>
          </div>
          <div className={styles.addUser} onClick={onAddUserContainerClick}>
            <div className={styles.profile1}>Add User</div>
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
  );
};

export default AverageCostIn;
