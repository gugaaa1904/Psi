import { useState, useCallback } from "react";
import PopUpRemoveUser from "../components/PopUpRemoveUser";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./RemoveUser.module.css";
import axios from "axios";

const RemoveUser = () => {
  const [isPopUpRemoveUserOpen, setPopUpRemoveUserOpen] = useState(false);
  const navigate = useNavigate();

  const openPopUpRemoveUser = useCallback(() => {
    setPopUpRemoveUserOpen(true);
  }, []);

  const closePopUpRemoveUser = useCallback(() => {
    setPopUpRemoveUserOpen(false);
  }, []);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-admin");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/help-admin");
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

  const onAddUserContainerClick = useCallback(() => {
    navigate("/add-user");
  }, [navigate]);

  const handleRemoveUser = useCallback(async () => {
    // Obtenha os valores dos campos de input
    const name = document.getElementById("admin_name").value;
    const email = document.getElementById("email").value;

    try {
      // Envie uma solicitação para remover o colaborador com base nos dados inseridos
      const response = await axios.delete(`http://localhost/Psi/backend/services/removecollaborator.php?name=${name}&email=${email}`);
      
      // Verifique se a solicitação foi bem-sucedida
      if (response.status === 200) {
        // Coloque aqui qualquer lógica adicional após a remoção bem-sucedida
        console.log("Colaborador removido com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao remover colaborador:", error);
    }
  }, []);


  return (
    <>
      <div className={styles.removeUser}>
        <div className={styles.content}>
          <div className={styles.contentChild} />
          <div className={styles.removeUserButton} onClick={handleRemoveUser}>
            <b className={styles.removeUser1}>Remove User</b>
          </div>
          <input
            className={styles.name}
            name="Admin Name"
            id="admin_name"
            placeholder="Name"
            type="text"
          />
          <input
            className={styles.email}
            name="Email"
            id="email"
            placeholder="Email"
            type="email"
          />
          <div className={styles.enterTheFields}>
            Enter the fields below to remove a user:
          </div>
        </div>
        <div className={styles.header}>
          <b className={styles.removeUser2}>Remove User</b>
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
            <div className={styles.removeUser3}>
              <b className={styles.removeUser4}>Remove User</b>
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
      {isPopUpRemoveUserOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closePopUpRemoveUser}>
          <PopUpRemoveUser onClose={closePopUpRemoveUser} />
        </PortalPopup>
      )}
    </>
  );
};

export default RemoveUser;
