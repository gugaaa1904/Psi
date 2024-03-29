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
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [message, setMessage] = useState("");

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

  const onDashboardContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onPortuguesContainerClick = useCallback(() => {
    navigate("/pt-settings-collaborator");
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const collaboratorId = sessionStorage.getItem("collaborator_id");

      console.log("Colaborador ID:", collaboratorId);
      console.log("Senha Antiga:", oldPassword);
      console.log("Nova Senha:", newPassword);
      const response = await fetch(
        "http://localhost/Psi/backend/services/changepasswordcollaborator.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            col: collaboratorId,
            old: oldPassword,
            new: newPassword,
          }),
        }
      );

      try {
        if (!response.ok) {
          // Se a resposta não estiver ok, mostrar o erro
          const text = await response.text();
          console.error(`Request failed with status: ${response.status}`, text);
          setMessage(text);
          return;
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          console.log(data.status);


          setTimeout(() => {
            window.location.reload();
          }, 3000);

          

          if (data.status === "success") {
            // Realizar redirecionamento para a página desejada

          } else {
            // Se a resposta não for bem-sucedida, mostrar o erro
            const errorMessage = data.error || "Erro desconhecido";
            console.error("Erro ao alterar a senha", errorMessage);
            setMessage(errorMessage);
          }
        } else {
          // Conteúdo não é JSON válido
          const text = await response.text();
          console.error("Resposta não contém JSON válido:", text);
          setMessage(text);
        }
      } catch (error) {
        console.error("Erro ao processar a resposta:", error);
        setMessage("Erro ao processar a resposta");
      }
    } catch (error) {
      console.error("Erro ao realizar a solicitação:", error);
      setMessage("Erro ao realizar a solicitação");
    }
  };

  return (
    <>
      <div className={styles.settingsCollaborator}>
        <div className={styles.content}>
          <div className={styles.contentChild} />
          <div className={styles.accessSecurity}>
            <div className={styles.divider} />
            <div className={styles.accessSecurity1}>{`Access & Security`}</div>
          </div>

          <div className={styles.header}>
            <img
              className={styles.notificationsIcon}
              alt=""
              src="/notifications.svg"
              onClick={openNotifications}
            />
            <b className={styles.settingsheader}>Settings</b>
          </div>

          <div className={styles.language}>
            <div className={styles.tabs}>
              <div className={styles.portuguese} onClick={onPortuguesContainerClick}>
                <div className={styles.portuguese1}>Português</div>
              </div>
              <div className={styles.english}>
              </div>
              <div className={styles.english1}>English</div>
            </div>
          </div>

          <div className={styles.changePassword}>
            <div className={styles.tittle}>Change your password</div>
          </div>
          <form onSubmit={handleSubmit} method="POST">
            <label>
              <input
                className={styles.oldPassword}
                name="Old Password"
                id="old_password"
                placeholder="Enter your old Password"
                type="password"
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </label>
            <label>
              <input
                className={styles.newPassword}
                name="New Password"
                id="new_password"
                placeholder="Enter your new Password"
                type="password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>
            <label>
              <input
                className={styles.confirmNewPassword}
                name="Confirm new Password"
                id="confirm_new_password"
                placeholder="Confirm your new Password"
                type="password"
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </label>

            <button type="submit" className={styles.changeButton} onClick={openPopUpChangePassword}>
              <b className={styles.button1}>Change</b>
            </button>


            {/* Exibe mensagens de erro/sucesso */}
            {message && <p>{message}</p>}
          </form>
          <div className={styles.changePassword}>
            <div className={styles.tittle}>Change your password</div>
          </div>

          <div
            className={styles.changePassword}
            onClick={() =>
              onChangePassword(
                document.getElementById("old_password").value,
                document.getElementById("new_password").value,
                document.getElementById("confirm_new_password").value
              )
            }
          ></div>
          <div className={styles.logout} onClick={onLogoutContainerClick}>
            <b className={styles.button}>Log Out</b>
          </div>
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
              Review our privacy policy for a detailed understanding of how your
              data is handled.
            </p>
          </div>

          <div className={styles.title}>Privacy</div>
          <div className={styles.divider1} />
          <div className={styles.divider1} />
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
          <div className={styles.help5} onClick={onHelpContainerClick}>
            <b className={styles.help6}>Help</b>
          </div>
          <div className={styles.settings}>
            <div className={styles.settings1}>Settings</div>
          </div>

          <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
          <div className={styles.line} />
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
