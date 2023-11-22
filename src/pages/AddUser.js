import { useState, useCallback } from "react";
import PopUpAddUser from "../components/PopUpAddUser";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const [isPopUpAddUserOpen, setPopUpAddUserOpen] = useState(false);
  const navigate = useNavigate();

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
            onClick={openPopUpAddUser}
          >
            <b className={styles.createNewUser}>Create New User</b>
          </button>
          <input
            className={styles.password}
            name="Password"
            id="password"
            placeholder="Password"
            type="password"
          />
          <input
            className={styles.email}
            name="Email"
            id="email"
            placeholder="Email"
            type="email"
          />
          <select className={styles.gender} required={true} id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            className={styles.adress}
            name="Address"
            id="address"
            placeholder="Address"
            type="text"
          />
          <input
            className={styles.phoneNumber}
            name="Phone Number"
            id="phone_number"
            placeholder="Phone Number"
            type="number"
          />
          <select className={styles.chooseRole} id="choose_role">
            <option value="Administrator">Administrator</option>
            <option value="Collaborator">Collaborator</option>
          </select>
          <input
            className={styles.age}
            name="Age"
            id="age"
            placeholder="Age"
            type="number"
          />
          <input className={styles.name} placeholder="Name" type="text" />
          <div className={styles.enterTheFields}>
            Enter the fields below to add a new user:
          </div>
          <input
            className={styles.plafond}
            name="Plafond"
            id="plafond"
            placeholder="Plafond"
            type="number"
          />
          <input
            className={styles.tariff}
            name="Tariff"
            id="tariff"
            placeholder="Tariff"
            type="number"
          />
          <input
            className={styles.endDate}
            name="End Date"
            id="end_date"
            placeholder="End Date"
            type="date"
          />
          <input
            className={styles.startDate}
            name="Start Date"
            id="start_date"
            placeholder="Start Date"
            type="date"
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
