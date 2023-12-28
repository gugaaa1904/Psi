import { useState, useCallback, useEffect } from "react";
import PopUpChangePassword from "../componentsPT/PTPopUpChangePassword";
import PortalPopup from "../components/PortalPopup";
import Notifications from "../components/Notifications";
import { useNavigate } from "react-router-dom";
import styles from "./PTSettingsCollaborator.module.css";

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
    navigate("/pt-main");
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
    navigate("/pt-help-collaborator");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/pt-profile-collaborator");
  }, [navigate]);

  const onReportsContainerClick = useCallback(() => {
    navigate("/pt-reports-collaborator");
  }, [navigate]);

  const onDashboardContainerClick = useCallback(() => {
    navigate("/pt-dashboard");
  }, [navigate]);

  const onEnglishContainerClick = useCallback(() => {
    navigate("/settings-collaborator");
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

          if (data.status === "success") {
            // Realizar redirecionamento para a página desejada
            navigate("/pt-dashboard");
          } else {
            // Se a resposta não for bem-sucedida, mostrar o erro
            const errorMessage = data.error || "Erro desconhecido";
            console.error("Erro ao alterar a senha", errorMessage);
            setMessage(errorMessage);
            navigate("/pt-dashboard");
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
            <div className={styles.accessSecurity1}>{`Acesso & Segurança`}</div>
          </div>

          <div className={styles.header}>
            <img
              className={styles.notificationsIcon}
              alt=""
              src="/notifications.svg"
              onClick={openNotifications}
            />
            <b className={styles.settingsheader}>Definições</b>
          </div>

          <div className={styles.language}>
            <div className={styles.tabs}>
              <div className={styles.portuguese}>
                <div className={styles.portuguese1}>Português</div>
              </div>
              <div className={styles.english} onClick={onEnglishContainerClick}>
                <div className={styles.english1}>English</div>
              </div>
            </div>
          </div>

          <div className={styles.changePassword}>
            <div className={styles.tittle}>Altere a Palavra-passe</div>
          </div>
          <form onSubmit={handleSubmit} method="POST">
            <label>
              <input
                className={styles.oldPassword}
                name="Old Password"
                id="old_password"
                placeholder="Palavra-passe Antiga"
                type="password"
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </label>
            <label>
              <input
                className={styles.newPassword}
                name="New Password"
                id="new_password"
                placeholder="Palavra-passe Nova"
                type="password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>
            <label>
              <input
                className={styles.confirmNewPassword}
                name="Confirm new Password"
                id="confirm_new_password"
                placeholder="Confirmar Nova Palavra-passe"
                type="password"
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </label>
              <button type="submit" className={styles.changeButton}>
                <b className={styles.button1}>Alterar</b>
              </button>


            {/* Exibe mensagens de erro/sucesso */}
            {message && <p>{message}</p>}
          </form>

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
            <b className={styles.button}>Terminar Sessão</b>
          </div>
          <div className={styles.yourPrivacyIsContainer}>
            <p
              className={styles.yourPrivacyIs}
            >{`A sua privacidade é importante para nós, e queremos assegurar que tem controlo sobre quem pode aceder às suas informações nesta plataforma. Abaixo, pode ajustar as suas configurações de privacidade para personalizar a sua experiência.`}</p>
            <p className={styles.yourPrivacyIs}>&nbsp;</p>
            <p className={styles.yourPrivacyIs}>Segurança da Conta</p>
            <p className={styles.yourPrivacyIs}>
              Alterar Senha: Atualize regularmente a sua senha para reforçar a segurança da sua conta.
            </p>
            <p className={styles.yourPrivacyIs}>&nbsp;</p>
            <p className={styles.yourPrivacyIs}>Partilha de Dados</p>
            <p className={styles.yourPrivacyIs}>
              Partilha de Informações: Escolha o nível de informação com o qual se sente confortável compartilhar com outros. [Mínimo/Básico/Detalhado/Personalizado] 
            </p>
            <p className={styles.yourPrivacyIs}>
              Aplicações de Terceiros: Gerencie quais aplicações de terceiros podem acessar seus dados e revogue o acesso a qualquer momento.
            </p>
            <p className={styles.yourPrivacyIs}>&nbsp;</p>
            <p className={styles.yourPrivacyIs}>Visibilidade</p>
            <p className={styles.yourPrivacyIs}>
              Visibilidade do Perfil: Controle quem pode ver o seu perfil e as suas publicações. [Público/Apenas Amigos/Privado]
            </p>
            <p className={styles.yourPrivacyIs}>
              Indexação por Motores de Busca: Permitir que os motores de busca indexem o seu perfil? [Sim/Não]
            </p>
            <p className={styles.yourPrivacyIs}>Política de Privacidade</p>
            <p className={styles.yourPrivacyIs}>
              Revise a nossa política de privacidade para uma compreensão detalhada de como os seus dados são tratados.
            </p>
          </div>

          <div className={styles.title}>Privacidade</div>
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
              <div className={styles.dashboard1}>Dashboards</div>
            </div>
            <div className={styles.reports} onClick={onReportsContainerClick}>
              <div className={styles.reportsTexto}>Relatórios</div>
            </div>

            <div className={styles.profile} onClick={onProfileContainerClick}>
              <div className={styles.profile1}>Perfil</div>
            </div>
          </div>
          <div className={styles.help5} onClick={onHelpContainerClick}>
            <b className={styles.help6}>Ajuda</b>
          </div>
          <div className={styles.settings}>
            <div className={styles.settings1}>Definições</div>
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
