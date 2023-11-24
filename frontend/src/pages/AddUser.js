import { useState, useCallback } from "react";
import PopUpAddUser from "../components/PopUpAddUser";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./AddUser.module.css";


const AddUser = () => {
  const [isPopUpAddUserOpen, setPopUpAddUserOpen] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    companyname: "",
    address: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    password: "",
    plafond: "",
    tariff: "",
    end_date: "",
    start_date: "",
  });

  console.log(formData);
  const onAddUserClick = useCallback(() => {
    // Aqui você deve fazer a requisição para o backend
    fetch("http://localhost/Psi/backend/routes.php/colaborator", {
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

  const openPopUpAddUser = useCallback(() => {
    setPopUpAddUserOpen(true);
  }, []);

  const closePopUpAddUser = useCallback(() => {
    setPopUpAddUserOpen(false);
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

  const onRemoveUserContainerClick = useCallback(() => {
    navigate("/remove-user");
  }, [navigate]);

  return (
    <>
      <div className={styles.addUser}>
        <div className={styles.content}>
          <div className={styles.contentChild} />

          <button
            className={styles.createNewUserButton}
            autoFocus={true}
            onClick={(openPopUpAddUser, onAddUserClick)}
          >
            <b className={styles.createNewUser}>Create New User</b>
          </button>

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
            className={styles.email}
            name="email"
            id="email"
            placeholder="Email"
            type="email"
            onChange={handleInputChange}
            value={formData.email}
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
          </select>
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
            className={styles.companyname}
            name="companyname"
            id="companyname"
            placeholder="Company Name"
            type="text"
            onChange={handleInputChange}
            value={formData.companyname}
          />
          
          <input
            className={styles.phoneNumber}
            name="phone"
            id="phone"
            placeholder="Phone Number"
            type="number"
            onChange={handleInputChange}
            value={formData.phone}
          />
          <input
            className={styles.age}
            name="age"
            id="age"
            placeholder="Age"
            type="number"
            onChange={handleInputChange}
            value={formData.age}
          />
          <input
            className={styles.name}
            name="name"
            id="name"
            placeholder="Name"
            type="text"
            onChange={handleInputChange}
            value={formData.name}
          />
          <div className={styles.enterTheFields}>
            Enter the fields below to add a new user:
          </div>
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
            type="number"
            onChange={handleInputChange}
            value={formData.tariff}
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
            className={styles.startDate}
            name="start_date"
            id="start_date"
            placeholder="Start Date"
            type="date"
            onChange={handleInputChange}
            value={formData.start_date}
          />
          <div className={styles.contractOfThis}>Contract of this User</div>
        </div>
        <div className={styles.header}>
          <b className={styles.addUser1}>Add User</b>
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
          <div className={styles.line} />
          <div className={styles.line1} />
          <div className={styles.line2} />
          <div className={styles.line3} />
          <img className={styles.logo1Icon} alt="" src="/logo-11@2x.png" />
        </div>
      </div>
      {isPopUpAddUserOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closePopUpAddUser}>
          <PopUpAddUser onClose={closePopUpAddUser} />
        </PortalPopup>
      )}
    </>
  );
};

export default AddUser;
