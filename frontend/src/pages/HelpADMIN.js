import { useState, useCallback } from "react";
import Notifications from "../components/Notifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./HelpADMIN.module.css";

const HelpADMIN = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const openNotifications = useCallback(() => {
    setNotificationsOpen(true);
  }, []);

  const closeNotifications = useCallback(() => {
    setNotificationsOpen(false);
  }, []);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-admin");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/profile-admin");
  }, [navigate]);

  const onCollaboratorInformationContainerClick = useCallback(() => {
    navigate("/collaborator-info");
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
    <>
      <div className={styles.helpAdmin}>
        <div className={styles.content}>
          <div className={styles.wereHereForWhateverYouNe} />
          <div className={styles.faqFrequentlyAskedQuestion}>
            <div className={styles.divider} />
            <div className={styles.faqFrequentlyAsked}>
              FAQ (Frequently Asked Questions)
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.weHopeWeve}>
              We hope we've been able to help! Now enjoy InfoCharge
            </div>
            <div className={styles.whatCanYouContainer}>
              <ul className={styles.whatCanYouDoInTheAddUse}>
                <li className={styles.whatCanYouDoInTheAddUse1}>
                  <span>What can you do in the Add User Section?</span>
                </li>
              </ul>
              <p
                className={styles.theActivityAnd}
              >{`  > The Activity and Variation Based on the Contract dashboards can be viewed extended when clicked, while the Power and Monthly Expenses are informative an have both the drop down button to choose to view the data weeky or monthy.`}</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <ul className={styles.whatCanYouDoInTheAddUse}>
                <li className={styles.whatCanYouDoInTheAddUse1}>
                  <span>What can you do in the Remove User Section?</span>
                </li>
              </ul>
              <p
                className={styles.theActivityAnd}
              >{`  > The content is visual, informative and not interactive, with the purpose of giving a better insight on the history of charges and their respective costs.`}</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <ul className={styles.whatCanYouDoInTheAddUse}>
                <li className={styles.whatCanYouDoInTheAddUse1}>
                  <span>
                    What can you do in the Company Information Section?
                  </span>
                </li>
              </ul>
              <p
                className={styles.theActivityAnd}
              >{`  >  A full report based on the Dashboards, not interactive.`}</p>
              <p className={styles.theActivityAnd}>&nbsp;</p>
              <ul className={styles.whatCanYouDoInTheAddUse}>
                <li className={styles.whatCanYouDoInTheAddUse1}>
                  <span>What can you do in the Profile Section?</span>
                </li>
              </ul>
              <p
                className={styles.theActivityAnd}
              >{`  > Edit your profile photo an see your Notifications.`}</p>
              <p className={styles.theActivityAnd}>&nbsp;</p>
              <ul className={styles.whatCanYouDoInTheAddUse}>
                <li className={styles.whatCanYouDoInTheAddUse1}>
                  <span>What can you do in the Settings Section?</span>
                </li>
              </ul>
              <p
                className={styles.theActivityAnd}
              >{`  > Change the Language of the application, change your password, and Log out. There is also our Privacy & Terms and Conditions.`}</p>
            </div>
            <div className={styles.wereHereFor}>
              We're here for whatever you need
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
          <b className={styles.help}>Help</b>
        </div>
        
        <div className={styles.ifYouHaveContainer}>
          <span>
            If you have any additional question send a e-mail to our support
            team -
          </span>
          <span className={styles.infochargegmailcom}>
            {" "}
            infocharge@gmail.com
          </span>
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
              <div className={styles.profile1}>Profile</div>
            </div>
            <div
              className={styles.collaboratorInformation}
              onClick={onCollaboratorInformationContainerClick}
            >
              <div className={styles.profile1}>Collaborator Information</div>
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

export default HelpADMIN;
