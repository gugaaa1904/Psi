import { useEffect, useState, useCallback } from "react";
import CollaboratorAddedSucessfullyHR from "../components/CollaboratorAddedSucessfullyHR";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./AddUser.module.css";



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


  const openPopUpAddCollaborator = useCallback(() => {
    setPopUpAddCollaboratorOpen(true);
  }, []);

  const closePopUpAddCollaborator = useCallback(() => {
    setPopUpAddCollaboratorOpen(false);
  }, []);

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
        // Se a resposta indicar sucesso, abre o popup
        if (data.status === "success") {
          // Configura um temporizador para fechar o popup após 3 segundos
        }
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



  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-admin");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/help-admin");
  }, [navigate]);

  const onReportsContainerClick = useCallback(() => {
    navigate("/reports-admin");
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

  return (
    <>
      <div className={styles.addUser}>
        <div className={styles.content}>
          <div className={styles.contentChild} />
          <div className={styles.enterTheFields}>
            Enter the fields below to add a new user:
          </div>
          <input
            className={styles.name}
            name="name"
            id="name"
            placeholder="Name"
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
            placeholder="Password"
            type="password"
            onChange={handleInputChange}
            value={formData.password}
          />
          <input
            className={styles.adress}
            name="address"
            id="address"
            placeholder="Address"
            type="text"
            onChange={handleInputChange}
            value={formData.address}
          />
          <input
            className={styles.phoneNumber}
            name="phone"
            id="phone"
            placeholder="Phone Number"
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
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            className={styles.age}
            name="age"
            id="age"
            placeholder="Age"
            type="integer"
            onChange={handleInputChange}
            value={formData.age}
          />

          <div className={styles.contractOfThis}>Contract of this User</div>
        </div>

        <input
          className={styles.startDate}
          name="start_date"
          id="start_date"
          placeholder="Start Date"
          type="date"
          onChange={handleInputChange}
          value={formData.start_date}
        />

        <input
          className={styles.endDate}
          name="end_date"
          id="end_date"
          placeholder="End Date"
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
          placeholder="Tariff"
          type="text"
          onChange={handleInputChange}
          value={formData.tariff}
        />

        <input
          className={styles.emailplug}
          name="emailplug"
          id="emailplug"
          placeholder="Email of Tapo Account"
          type="text"
          onChange={handleInputChange}
          value={formData.emailplug}
        />

        <input
          className={styles.passwordplug}
          name="passwordplug"
          id="passwordplug"
          placeholder="Password of Tapo Account"
          type="text"
          onChange={handleInputChange}
          value={formData.passwordplug}
        />

        <input
          className={styles.ipplug}
          name="ipplug"
          id="ipplug"
          placeholder="IP of Tapo Plug"
          type="text"
          onChange={handleInputChange}
          value={formData.ipplug}
        />

        <button
          className={styles.createNewUserButton}
          autoFocus={true}
          onClick={() => {
            onAddUserClick();
            openPopUpAddCollaborator();
            /*setTimeout(() => {
            closePopUpAddCollaborator();
            // Realiza o refresh da página
            window.location.reload();
          }, 3000);*/
          }}
        >
          <b className={styles.createNewUser}>Create New User</b>
        </button>


        <div className={styles.header}>
          <div className={styles.line} />
          <b className={styles.addUser1}>Add User</b>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.settings} onClick={onSettingsContainerClick}>
            <div className={styles.settings1}>Settings</div>
          </div>
          <div className={styles.help} onClick={onHelpContainerClick}>
            <div className={styles.help1}>Help</div>
          </div>
          <div className={styles.menu}>
            <div className={styles.profile} onClick={onProfileContainerClick}>
              <div className={styles.profile1}>Profile</div>
            </div>

            <div className={styles.reports} onClick={onReportsContainerClick}>
              <div className={styles.reports1}>Reports</div>
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
            <div className={styles.addUser2}>
              <b className={styles.addUser3}>Add User</b>
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
