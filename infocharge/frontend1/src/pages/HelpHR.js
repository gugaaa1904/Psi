import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HelpHR.module.css";

const HelpHR = () => {
  const navigate = useNavigate();

  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-hr");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/profile-hr");
  }, [navigate]);

  const onCollaboratorInformationContainerClick = useCallback(() => {
    navigate("/collaborator-info");
  }, [navigate]);

  const onRemoveColaboratorContainerClick = useCallback(() => {
    navigate("/remove-colaborator");
  }, [navigate]);

  const onAddCollaboratorContainerClick = useCallback(() => {
    navigate("/add-colaborator");
  }, [navigate]);

  return (
    <div className={styles.helpHr}>
      <div className={styles.content}>
        <div className={styles.contentChild} />
        <div className={styles.weHopeWeve}>
          We hope we've been able to help! Now enjoy InfoCharge
        </div>
        <div className={styles.wereHereForWhateverYouNe}>
          <div className={styles.wereHereFor}>
            We're here for whatever you need
          </div>
        </div>
        <div className={styles.faqFrequentlyAskedQuestion}>
          <div className={styles.divider} />
          <div className={styles.faqFrequentlyAsked}>
            FAQ (Frequently Asked Questions)
          </div>
        </div>
        <div className={styles.whatCanYouContainer}>
          <ul className={styles.whatCanYouDoInTheAddCol}>
            <li className={styles.whatCanYouDoInTheAddCol1}>
              <span>What can you do in the Add collaborator Section?</span>
            </li>
          </ul>
          <p
            className={styles.theActivityAnd}
          >{`  > The Activity and Variation Based on the Contract dashboards can be viewed extended when clicked, while the Power and Monthly Expenses are informative an have both the drop down button to choose to view the data weeky or monthy.`}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <ul className={styles.whatCanYouDoInTheAddCol}>
            <li className={styles.whatCanYouDoInTheAddCol1}>
              <span>What can you do in the Remove User Section?</span>
            </li>
          </ul>
          <p
            className={styles.theActivityAnd}
          >{`  > The content is visual, informative and not interactive, with the purpose of giving a better insight on the history of charges and their respective costs.`}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <ul className={styles.whatCanYouDoInTheAddCol}>
            <li className={styles.whatCanYouDoInTheAddCol1}>
              <span>What can you do in the Company Information Section?</span>
            </li>
          </ul>
          <p
            className={styles.theActivityAnd}
          >{`  >  A full report based on the Dashboards, not interactive.`}</p>
          <p className={styles.theActivityAnd}>&nbsp;</p>
          <ul className={styles.whatCanYouDoInTheAddCol}>
            <li className={styles.whatCanYouDoInTheAddCol1}>
              <span>What can you do in the Profile Section?</span>
            </li>
          </ul>
          <p
            className={styles.theActivityAnd}
          >{`  > Edit your profile photo an see your Notifications.`}</p>
          <p className={styles.theActivityAnd}>&nbsp;</p>
          <ul className={styles.whatCanYouDoInTheAddCol}>
            <li className={styles.whatCanYouDoInTheAddCol1}>
              <span>What can you do in the Settings Section?</span>
            </li>
          </ul>
          <p
            className={styles.theActivityAnd}
          >{`  > Change the Language of the application, change your password, and Log out. There is also our Privacy & Terms and Conditions.`}</p>
        </div>
      </div>
      <div className={styles.header}>
        <b className={styles.help}>Help</b>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.settings} onClick={onSettingsContainerClick}>
          <img className={styles.settingsIcon} alt="" src="/settings.svg" />
          <div className={styles.settings1}>Settings</div>
        </div>
        <div className={styles.help1}>
          <img className={styles.iconshelp} alt="" src="/iconshelp1.svg" />
          <b className={styles.help2}>Help</b>
        </div>
        <div className={styles.menu}>
          <div className={styles.profile} onClick={onProfileContainerClick}>
            <div className={styles.addColaborator}>Profile</div>
          </div>
          <div
            className={styles.collaboratorInformation}
            onClick={onCollaboratorInformationContainerClick}
          >
            <div className={styles.addColaborator}>
              Collaborator Information
            </div>
          </div>
          <div
            className={styles.removeColaborator}
            onClick={onRemoveColaboratorContainerClick}
          >
            <div className={styles.addColaborator}>Remove Colaborator</div>
          </div>
          <div
            className={styles.addCollaborator}
            onClick={onAddCollaboratorContainerClick}
          >
            <div className={styles.addColaborator}>Add Colaborator</div>
          </div>
          <b className={styles.menu1}>MENU</b>
        </div>
        <div className={styles.line} />
        <div className={styles.line1} />
        <div className={styles.line2} />
        <div className={styles.line3} />
        <img className={styles.logo1Icon} alt="" src="/logo-12@2x.png" />
      </div>
      <div className={styles.ifYouHaveContainer}>
        <span>
          If you have any additional question send a e-mail to our support team
          -
        </span>
        <span className={styles.infochargegmailcom}> infocharge@gmail.com</span>
      </div>
    </div>
  );
};

export default HelpHR;
