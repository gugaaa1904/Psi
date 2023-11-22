import { useState, useCallback } from "react";
import PopUpAddColaborator from "../components/PopUpAddColaborator";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./AddColaborator.module.css";

const AddColaborator = () => {
  const [isPopUpAddColaboratorOpen, setPopUpAddColaboratorOpen] =
    useState(false);
  const navigate = useNavigate();

  const openPopUpAddColaborator = useCallback(() => {
    setPopUpAddColaboratorOpen(true);
  }, []);

  const closePopUpAddColaborator = useCallback(() => {
    setPopUpAddColaboratorOpen(false);
  }, []);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-hr");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/help-hr");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/profile-hr");
  }, [navigate]);

  const onReportsContainerClick = useCallback(() => {
    navigate("/collaborator-info");
  }, [navigate]);

  const onTimelinesContainerClick = useCallback(() => {
    navigate("/remove-colaborator");
  }, [navigate]);

  return (
    <>
      <div className={styles.addColaborator}>
        <div className={styles.content}>
          <div className={styles.contentChild} />
          <div
            className={styles.createNewCollaborator}
            onClick={openPopUpAddColaborator}
          >
            <b className={styles.button}>Create New Collaborator</b>
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
          <div className={styles.contractOfThis}>
            Contract of this Colaborator:
          </div>
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
          <select
            className={styles.chooseRole}
            required={true}
            id="choose_role"
          >
            <option value="Admin">Admin</option>
            <option value="Colaborator">Colaborator</option>
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
            Enter the fields below to add a Collaborator:
          </div>
        </div>
        <div className={styles.header}>
          <b className={styles.addCollaborator}>Add Collaborator</b>
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
              <div className={styles.reportsTexto}>Profile</div>
            </div>
            <div className={styles.reports} onClick={onReportsContainerClick}>
              <div className={styles.reportsTexto}>
                Collaborator Information
              </div>
            </div>
            <div
              className={styles.timelines}
              onClick={onTimelinesContainerClick}
            >
              <div className={styles.reportsTexto}>Remove Colaborator</div>
            </div>
            <div className={styles.dashboard}>
              <b className={styles.addColaborator1}>Add Colaborator</b>
            </div>
            <b className={styles.menu1}>MENU</b>
          </div>
          <div className={styles.line} />
          <div className={styles.line1} />
          <div className={styles.line2} />
          <div className={styles.line3} />
          <img className={styles.logo1Icon} alt="" src="/logo-12@2x.png" />
        </div>
      </div>
      {isPopUpAddColaboratorOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closePopUpAddColaborator}
        >
          <PopUpAddColaborator onClose={closePopUpAddColaborator} />
        </PortalPopup>
      )}
    </>
  );
};

export default AddColaborator;
