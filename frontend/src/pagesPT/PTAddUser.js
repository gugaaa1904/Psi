import { useEffect, useState, useCallback } from "react";
import CollaboratorAddedSucessfullyHR from "../componentsPT/PTPopUpAddUser";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./PTAddUser.module.css";


const AddUser = () => {
  const [isPopUpAddCollaboratorOpen, setPopUpAddCollaboratorOpen] =
    useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company_id: sessionStorage.getItem("company_id"),
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    password: "",
    address: "",
    plafond: "",
    tariff: "",
    start_date: "",
    end_date: "",

    emailplug: "",
    passwordplug: "",
    ipplug: "",
  });

  const onAddUserClick = useCallback(() => {
    // Aqui você deve fazer a requisição para o backend
    console.log(formData);
    fetch("http://localhost/Psi/backend/services/collaborator.php", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: new URLSearchParams(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Lógica para lidar com a resposta do backend
        console.log(data);
        // If the response indicates success, open the PopUpAddCollaborator
      })
      .catch((error) => {
        console.error("Erro na solicitação:", error);
      });
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const openPopUpAddCollaborator = useCallback(() => {
    setPopUpAddCollaboratorOpen(true);
  }, []);

  const closePopUpAddCollaborator = useCallback(() => {
    setPopUpAddCollaboratorOpen(false);
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

  const onRemoveUserContainerClick = useCallback(() => {
    navigate("/pt-remove-user");
  }, [navigate]);

  return (
    <>
      <div className={styles.addUser}>
        <div className={styles.content}>
          <div className={styles.contentChild} />
          <div className={styles.enterTheFields}>
            Introduza os campos abaixo para adicionar um novo utilizador:
          </div>
          <input
            className={styles.name}
            name="name"
            id="name"
            placeholder="Nome"
            type="text"
            onChange={handleInputChange}
            value={formData.name}
          />
          <input
            className={styles.email}
            name="email"
            id="email"
            placeholder="Email"
            type="email"
            onChange={handleInputChange}
            value={formData.email}
          />
          <input
            className={styles.password}
            name="password"
            id="password"
            placeholder="Palavra-passe"
            type="password"
            onChange={handleInputChange}
            value={formData.password}
          />
          <input
            className={styles.adress}
            name="address"
            id="address"
            placeholder="Morada"
            type="text"
            onChange={handleInputChange}
            value={formData.address}
          />
          <input
            className={styles.phoneNumber}
            name="phone"
            id="phone"
            placeholder="Telefone"
            type="integer"
            onChange={handleInputChange}
            value={formData.phone}
          />
          <select
            className={styles.gender}
            required={true}
            name="gender"
            id="gender"
            onChange={handleInputChange}
            value={formData.gender}
          >
            <option value="Male">Masculino</option>
            <option value="Female">Feminino</option>
            <option value="Other">Outro</option>
          </select>
          <input
            className={styles.age}
            name="age"
            id="age"
            placeholder="Idade"
            type="integer"
            onChange={handleInputChange}
            value={formData.age}
          />

          <div className={styles.contractOfThis}>Contrato deste Utilizador</div>
        </div>

        <input
          className={styles.startDate}
          name="start_date"
          id="start_date"
          placeholder="Data de Início"
          type="date"
          onChange={handleInputChange}
          value={formData.start_date}
        />

        <input
          className={styles.endDate}
          name="end_date"
          id="end_date"
          placeholder="Data de Término"
          type="date"
          onChange={handleInputChange}
          value={formData.end_date}
        />

        <input
          className={styles.plafond}
          name="plafond"
          id="plafond"
          placeholder="Plafond"
          type="number"
          onChange={handleInputChange}
          value={formData.plafond}
        />
        <input
          className={styles.tariff}
          name="tariff"
          id="tariff"
          placeholder="Tarifa"
          type="text"
          onChange={handleInputChange}
          value={formData.tariff}
        />

        <input
          className={styles.emailplug}
          name="emailplug"
          id="emailplug"
          placeholder="Email da Conta Tapo"
          type="text"
          onChange={handleInputChange}
          value={formData.emailplug}
        />

        <input
          className={styles.passwordplug}
          name="passwordplug"
          id="passwordplug"
          placeholder="Palavra-passe da Conta Tapo"
          type="text"
          onChange={handleInputChange}
          value={formData.passwordplug}
        />

        <input
          className={styles.ipplug}
          name="ipplug"
          id="ipplug"
          placeholder="IP da Tomada Tapo"
          type="text"
          onChange={handleInputChange}
          value={formData.ipplug}
        />

        <button
          className={styles.createNewUserButton}
          autoFocus={true}
          onClick={onAddUserClick}
        >
          <b className={styles.createNewUser}>Criar Utilizador</b>
        </button>

        <div className={styles.header}>
          <div className={styles.line} />
          <b className={styles.addUser1}>Adicionar Utilizador</b>
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
            <div
              className={styles.removeUser}
              onClick={onRemoveUserContainerClick}
            >
              <div className={styles.profile1}>Remover Utilizador</div>
            </div>
            <div className={styles.addUser2}>
              <b className={styles.addUser3}>Adicionar Utilizador</b>
            </div>
            <b className={styles.menu1}>MENU</b>
          </div>
          <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
          <div className={styles.line} />
        </div>
      </div>
      {isPopUpAddCollaboratorOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopUpAddCollaborator}
        >
          <CollaboratorAddedSucessfullyHR onClose={closePopUpAddCollaborator} />
        </PortalPopup>
      )}
    </>
  );
};

export default AddUser;
