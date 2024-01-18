import { useState, useCallback } from "react";
import Notifications from "../components/Notifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./HelpCollaborator.module.css";

const HelpCollaborator = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const openNotifications = useCallback(() => {
    setNotificationsOpen(true);
  }, []);

  const closeNotifications = useCallback(() => {
    setNotificationsOpen(false);
  }, []);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-collaborator");
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

   return (
     <>
       <div className={styles.helpCollaborator}>
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
                   <span>What can you do in the Dashboards Section?</span>
                 </li>
               </ul>
               <p
                 className={styles.theActivityAnd}
               >{`  > Visualize your daily, weekly, monthly consuming and spendings, you can change the viewing perspective and save the "Monthly Expenses" graphic.`}</p>
               <p className={styles.blankLine}>&nbsp;</p>
               <ul className={styles.whatCanYouDoInTheAddUse}>
                 <li className={styles.whatCanYouDoInTheAddUse1}>
                   <span>What can you do in the Reports Section?</span>
                 </li>
               </ul>
               <p
                 className={styles.theActivityAnd}
               >{`  > The content is visual, informative and not interactive, with the purpose of giving a better insight on the history of charges and their respective costs.`}</p>
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
             infocharge.sup@gmail.com
           </span>
         </div>
         <div className={styles.sidebar}>
           <div className={styles.menu}>
             <b className={styles.menu1}>MENU</b>
             <div
               className={styles.dashboard}
               onClick={onDashboardContainerClick}
             >
               <div className={styles.dashboard1}>Dashboard</div>
             </div>
             <div className={styles.reports} onClick={onReportsContainerClick}>
               <div className={styles.reportsTexto}>Reports</div>
             </div>

             <div className={styles.profile} onClick={onProfileContainerClick}>
               <div className={styles.profile1}>Profile</div>
             </div>
           </div>
           <div className={styles.help5}>
             <b className={styles.help6}>Help</b>
           </div>
           <div className={styles.settings} onClick={onSettingsContainerClick}>
             <div className={styles.settings1}>Settings</div>
           </div>

           <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
           <div className={styles.line} />
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

export default HelpCollaborator;


