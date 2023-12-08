import { useState, useCallback, useEffect } from "react";
import PopUpChangePassword from "../components/PopUpChangePassword";
import PortalPopup from "../components/PortalPopup";
import Notifications from "../components/Notifications";
import { useNavigate } from "react-router-dom";
import styles from "./SettingsCollaborator.module.css";

const SettingsCollaborator = () => {
  const [isPopUpChangePasswordOpen, setPopUpChangePasswordOpen] =
    useState(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [message, setMessage] = useState('');


  const onLogoutContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openPopUpChangePassword = useCallback(() => {
    setPopUpChangePasswordOpen(true);
  }, []);

  const closePopUpChangePassword = useCallback(() => {
    setPopUpChangePasswordOpen(false);
  }, []);

  const openNotifications = useCallback(() => {
    setNotificationsOpen(true);
  }, []);

  const closeNotifications = useCallback(() => {
    setNotificationsOpen(false);
  }, []);

  const onHelpContainerClick = useCallback(() => {
    navigate("/help-collaborator");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/profile-collaborator");
  }, [navigate]);

  const onReportsContainerClick = useCallback(() => {
    navigate("/reports-collaborator");
  }, [navigate]);

  const onTimelinesContainerClick = useCallback(() => {
    navigate("/timeline");
  }, [navigate]);

  const onDashboardContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const collaboratorId = sessionStorage.getItem('collaborator_id');
      const response = await fetch(
        "http://localhost/Psi/backend/services/changepasswordcollaborator.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            collaboratorId:collaboratorId,
            oldPassword:oldPassword,
            newPassword:newPassword
          })
        }
      )
      sessionStorage.setItem('collaboratorId', JSON.stringify(collaboratorId)); 
      sessionStorage.setItem('oldPassword', JSON.stringify(oldPassword)); 
      sessionStorage.setItem('newPassword', JSON.stringify(newPassword));
      if (newPassword !== confirmNewPassword) {
        setMessage('As novas senhas não coincidem');
        return;
      }
      const data = await response.json();
      console.log(data.status);
      
      if (data.status === "success") {
        sessionStorage.setItem('collaborator_id', JSON.stringify(data.id));
        // Credenciais válidas, redirecionar para company-info
      } else {
            // Se a resposta não for bem-sucedida, mostrar o erro
        const errorMessage = data.error || "Erro desconhecido";
        console.error("Erro ao alterar a senha", errorMessage);
      }
    } catch (error) {
          // Se ocorrer um erro durante a solicitação
      console.error("Erro ao processar a solicitação:", error);
    }
  }

  return (
    <>
      <div className={styles.settingsCollaborator}>
        <div className={styles.content}>
          <div className={styles.contentChild} />
          <div className={styles.logout} onClick={onLogoutContainerClick}>
            <b className={styles.button}>Log Out</b>
          </div>
          <div className={styles.privacy}>
            <div className={styles.yourPrivacyIsContainer}>
              <p
                className={styles.yourPrivacyIs}
              >{`Your privacy is important to us, and we want to ensure that you have control over who can access your information on this platform. Below, you can adjust your privacy settings to customize your experience. `}</p>
              <p className={styles.yourPrivacyIs}>&nbsp;</p>
              <p className={styles.yourPrivacyIs}>Account Security</p>
              <p className={styles.yourPrivacyIs}>
                Change Password: Regularly update your password to enhance the
                security of your account.
              </p>
              <p className={styles.yourPrivacyIs}>&nbsp;</p>
              <p className={styles.yourPrivacyIs}>Data Sharing</p>
              <p className={styles.yourPrivacyIs}>
                Information Sharing: Choose the level of information you are
                comfortable sharing with others. [Minimal/Basic/Detailed/Custom]
              </p>
              <p className={styles.yourPrivacyIs}>
                Third-Party Apps: Manage which third-party apps can access your
                data and revoke access at any time.
              </p>
              <p className={styles.yourPrivacyIs}>&nbsp;</p>
              <p className={styles.yourPrivacyIs}>Visibility</p>
              <p className={styles.yourPrivacyIs}>
                Profile Visibility: Control who can see your profile and your
                posts. [Public/Friends Only/Private]
              </p>
              <p className={styles.yourPrivacyIs}>
                Search Engine Indexing: Allow search engines to index your
                profile? [Yes/No]
              </p>
              <p className={styles.yourPrivacyIs}>Privacy Policy</p>
              <p className={styles.yourPrivacyIs}>
                Review our privacy policy for a detailed understanding of how
                your data is handled.
              </p>
            </div>
            <div className={styles.divider} />
            <div className={styles.title}>Privacy</div>
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Old Password</p>
              <input
                type="password"
                className={styles.oldPassword}
                placeholder="Enter your old Password"
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </label>
            <label>
              <p>New Password</p>
              <input
                type="password"
                className={styles.newPassword}
                placeholder="Enter your new Password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>
            <label>
              <p>Confirm new Password</p>
              <input
                type="password"
                className={styles.confirmNewPassword}
                placeholder="Confirm your new Password"
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </label>
            <div>
              <button type="submit">Change</button>
            </div>

            {/* Exibe mensagens de erro/sucesso */}
            {message && <p>{message}</p>}
          </form>
          <div className={styles.changePassword}>
            <div className={styles.tittle}>Change your password</div>
          </div>
          <div className={styles.language}>
            <div className={styles.tabs}>
              <div className={styles.tab}>
                <div className={styles.title1}>Portuguese</div>
              </div>
              <div className={styles.tab1}>
                <div className={styles.title2}>English</div>
              </div>
            </div>
          </div>
          <div className={styles.accessSecurity}>
            <div className={styles.divider} />
            <div className={styles.accessSecurity1}>{`Access & Security`}</div>
          </div>
        </div>
        <div className={styles.header}>
          <img
            className={styles.notificationsIcon}
            alt=""
            src="/notifications.svg"
            onClick={openNotifications}
          />
          <b className={styles.settings}>Settings</b>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.settings1}>
            <img className={styles.settingsIcon} alt="" src="/settings1.svg" />
            <b className={styles.settings2}>Settings</b>
          </div>
          <div className={styles.help} onClick={onHelpContainerClick}>
            <img className={styles.iconshelp} alt="" src="/iconshelp.svg" />
            <div className={styles.help1}>Help</div>
          </div>
          <div className={styles.menu}>
            <div className={styles.profile} onClick={onProfileContainerClick}>
              <div className={styles.profile1}>Profile</div>
            </div>
            <div className={styles.reports} onClick={onReportsContainerClick}>
              <div className={styles.reportsTexto}>Reports</div>
            </div>
            <div
              className={styles.timelines}
              onClick={onTimelinesContainerClick}
            >
              <div className={styles.profile1}>Timelines</div>
            </div>
            <div
              className={styles.dashboard}
              onClick={onDashboardContainerClick}
            >
              <div className={styles.profile1}>Dashboard</div>
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
      {isPopUpChangePasswordOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closePopUpChangePassword}
        >
          <PopUpChangePassword onClose={closePopUpChangePassword} />
        </PortalPopup>
      )}
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

export default SettingsCollaborator;
