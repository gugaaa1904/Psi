import { useState, useCallback } from "react";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./HelpADMIN.module.css";

const HelpADMIN = () => {
  const navigate = useNavigate();


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
              >{`  > To Add a User (Collaborator), you need to fill in all the fields with the employee's information, and this will be automatically associated with your company.`}</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <ul className={styles.whatCanYouDoInTheAddUse}>
                <li className={styles.whatCanYouDoInTheAddUse1}>
                  <span>What can you do in the Remove User Section?</span>
                </li>
              </ul>
              <p
                className={styles.theActivityAnd}
              >{`  > By entering a collaborator's Name and Email, you can remove their account.`}</p>
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
              >{`  > The content is visual, informative and has the ability to change the way you want to see the data, weekly or monthly, with the aim of giving a better view of the environmental impact and total consumption and spending values.`}</p>

              <p className={styles.blankLine}>&nbsp;</p>
              <ul className={styles.whatCanYouDoInTheAddUse}>
                <li className={styles.whatCanYouDoInTheAddUse1}>
                  <span>
                    What can you do in the Collaborator Information Section?
                  </span>
                </li>
              </ul>
              <p
                className={styles.theActivityAnd}
              >{`  > In this section you can see in detail the general consumption of each user, including their total expenses in € and kWh, and you can also see daily, weekly and monthly data.`}</p>
              
              <p className={styles.theActivityAnd}>&nbsp;</p>
              <ul className={styles.whatCanYouDoInTheAddUse}>
                <li className={styles.whatCanYouDoInTheAddUse1}>
                  <span>What can you do in the Profile Section?</span>
                </li>
              </ul>
              <p
                className={styles.theActivityAnd}
              >{`  > Edit your profile photo and view your information.`}</p>
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
          <b className={styles.help}>Help</b>
        </div>

        <div className={styles.ifYouHaveContainer}>
          <span>
            If you have any additional question send a e-mail to our support
            team -
          </span>
          <span className={styles.infochargegmailcom}>
            {" "}
            infocharge.sup@gmail.com
          </span>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.settings} onClick={onSettingsContainerClick}>
            <div className={styles.settings1}>Settings</div>
          </div>
          <div className={styles.help1}>
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

          <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
          <div className={styles.line} />
        </div>
      </div>
    </>
  );
};

export default HelpADMIN;
