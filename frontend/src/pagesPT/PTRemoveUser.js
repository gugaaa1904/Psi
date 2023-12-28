import { useEffect, useState, useCallback } from "react";
import PopUpRemoveUser from "../componentsPT/PTPopUpRemoveUser";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./PTRemoveUser.module.css";
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
    navigate("/pt-settings-admin");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/pt-help-admin");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/pt-profile-admin");
  }, [navigate]);

  const onCollaboratorInformationContainerClick = useCallback(() => {
    navigate("/pt-collaborator-info");
  }, [navigate]);

  const onCompanyInformationContainerClick = useCallback(() => {
    navigate("/pt-company-info");
  }, [navigate]);

  const onAddUserContainerClick = useCallback(() => {
    navigate("/pt-add-user");
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
          <div className={styles.removeUserButton} onClick={() => {
            handleRemoveUser();
            openPopUpRemoveUser();
            setTimeout(() => {
            closePopUpRemoveUser();
            // Realiza o refresh da página
            window.location.reload();
          }, 3000);
          }}>
            <b className={styles.removeUser1}>Remover Utilizador</b>
          </div>
          <input
            className={styles.name}
            name="Admin Name"
            id="admin_name"
            placeholder="Nome"
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
            Introduza os campos abaixo para remover um utilizador:
          </div>
        </div>
        <div className={styles.header}>
          <b className={styles.removeUser2}>Remover Utilizador</b>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.settings} onClick={onSettingsContainerClick}>
            <div className={styles.settings1}>Definições</div>
          </div>
          <div className={styles.help} onClick={onHelpContainerClick}>
            <div className={styles.help1}>Ajuda</div>
          </div>
          <div className={styles.menu}>
            <div className={styles.profile} onClick={onProfileContainerClick}>
              <div className={styles.profile1}>Perfil</div>
            </div>
            <div
              className={styles.collaboratorInformation}
              onClick={onCollaboratorInformationContainerClick}
            >
              <div className={styles.profile1}>Colaboradores</div>
            </div>
            <div
              className={styles.companyInformation}
              onClick={onCompanyInformationContainerClick}
            >
              <div className={styles.profile1}>Empresa</div>
            </div>
            <div className={styles.removeUser3}>
              <b className={styles.removeUser4}>Remover Utilizador</b>
            </div>
            <div className={styles.addUser} onClick={onAddUserContainerClick}>
              <div className={styles.profile1}>Adicionar Utilizador</div>
            </div>
            <b className={styles.menu1}>MENU</b>
          </div>
          <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
          <div className={styles.line} />
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
