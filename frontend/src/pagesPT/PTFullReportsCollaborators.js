import { useState, useCallback } from "react";
import FullReport from "../components/FullReport";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./PTFullReportsCollaborators.module.css";

const FullReportsCollaborators = () => {
  const [isFullReportOpen, setFullReportOpen] = useState(false);
  const [isFullReport1Open, setFullReport1Open] = useState(false);
  const [isFullReport2Open, setFullReport2Open] = useState(false);
  const [isFullReport3Open, setFullReport3Open] = useState(false);
  const navigate = useNavigate();

  const openFullReport = useCallback(() => {
    setFullReportOpen(true);
  }, []);

  const closeFullReport = useCallback(() => {
    setFullReportOpen(false);
  }, []);

  const openFullReport1 = useCallback(() => {
    setFullReport1Open(true);
  }, []);

  const closeFullReport1 = useCallback(() => {
    setFullReport1Open(false);
  }, []);

  const openFullReport2 = useCallback(() => {
    setFullReport2Open(true);
  }, []);

  const closeFullReport2 = useCallback(() => {
    setFullReport2Open(false);
  }, []);

  const openFullReport3 = useCallback(() => {
    setFullReport3Open(true);
  }, []);

  const closeFullReport3 = useCallback(() => {
    setFullReport3Open(false);
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

  const onCompanyInformationContainerClick = useCallback(() => {
    navigate("/company-info");
  }, [navigate]);

  const onRemoveUserContainerClick = useCallback(() => {
    navigate("/remove-user");
  }, [navigate]);

  const onAddUserContainerClick = useCallback(() => {
    navigate("/add-user");
  }, [navigate]);

  return (
    <>
      <div className={styles.fullReportsCollaborators}>
        <div className={styles.content}>
          <div className={styles.volume}>
            <div className={styles.listOfCollaborators}>
              List of Collaborators
            </div>
            <div className={styles.employee}>
              <div className={styles.bigCard}>
                <div className={styles.bigCardChild} />
              </div>
              <div className={styles.employeeChild} />
              <b className={styles.name}>Afonso Mendes</b>
              <div className={styles.position}>
                <p className={styles.dhlEmployee}>DHL - Employee</p>
              </div>
              <div className={styles.ellipse} />
              <div className={styles.ellipse1} onClick={openFullReport} />
              <img
                className={styles.chevronRightSquareIcon}
                alt=""
                src="/chevronrightsquare.svg"
              />
              <img
                className={styles.image20Icon}
                alt=""
                src="/image-20@2x.png"
              />
            </div>
            <div className={styles.employee2}>
              <div className={styles.bigCard}>
                <div className={styles.bigCardChild} />
              </div>
              <div className={styles.employeeChild} />
              <b className={styles.name}>João Santos</b>
              <div className={styles.position}>
                <p className={styles.dhlEmployee}>DHL - Employee</p>
              </div>
              <div className={styles.ellipse} />
              <div className={styles.ellipse1} onClick={openFullReport1} />
              <img
                className={styles.chevronRightSquareIcon}
                alt=""
                src="/chevronrightsquare.svg"
              />
              <img
                className={styles.image19Icon}
                alt=""
                src="/image-19@2x.png"
              />
            </div>
            <div className={styles.employee3}>
              <div className={styles.bigCard}>
                <div className={styles.bigCardChild} />
              </div>
              <div className={styles.employeeChild} />
              <b className={styles.name}>Diogo Correia</b>
              <div className={styles.position}>
                <p className={styles.dhlEmployee}>DHL - Employee</p>
              </div>
              <div className={styles.ellipse} />
              <div className={styles.ellipse1} onClick={openFullReport2} />
              <img
                className={styles.chevronRightSquareIcon}
                alt=""
                src="/chevronrightsquare.svg"
              />
              <img
                className={styles.image18Icon}
                alt=""
                src="/image-18@2x.png"
              />
            </div>
            <div className={styles.employee4}>
              <div className={styles.bigCard3}>
                <div className={styles.bigCardChild} />
              </div>
              <div className={styles.employee4Child} />
              <b className={styles.name3}>Nuno Bernardino</b>
              <div className={styles.position3}>
                <p className={styles.dhlEmployee}>DHL - Employee</p>
              </div>
              <div className={styles.ellipse6} />
              <div className={styles.ellipse7} onClick={openFullReport3} />
              <img
                className={styles.chevronRightSquareIcon3}
                alt=""
                src="/chevronrightsquare1.svg"
              />
              <img
                className={styles.image21Icon}
                alt=""
                src="/image-21@2x.png"
              />
            </div>
            <div className={styles.employee5}>
              <div className={styles.bigCard}>
                <div className={styles.bigCardChild} />
              </div>
              <div className={styles.employeeChild} />
              <div className={styles.employee5Item} />
              <b className={styles.name4}>Gonçalo Custódio</b>
              <div className={styles.position}>
                <p className={styles.dhlEmployee}>DHL - Employee</p>
              </div>
            </div>
          </div>
          <div className={styles.generalOverview}>
            <div className={styles.divider} />
            <div className={styles.generalOverview1}>General Overview</div>
          </div>
        </div>
        <div className={styles.header}>
          <b className={styles.collaboratorInformation}>
            Collaborator Information
          </b>
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
            <div className={styles.collaboratorInformation1}>
              <b className={styles.collaboratorInformation2}>
                Collaborator Information
              </b>
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
      {isFullReportOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFullReport}
        >
          <FullReport onClose={closeFullReport} />
        </PortalPopup>
      )}
      {isFullReport1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFullReport1}
        >
          <FullReport onClose={closeFullReport1} />
        </PortalPopup>
      )}
      {isFullReport2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFullReport2}
        >
          <FullReport onClose={closeFullReport2} />
        </PortalPopup>
      )}
      {isFullReport3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFullReport3}
        >
          <FullReport onClose={closeFullReport3} />
        </PortalPopup>
      )}
    </>
  );
};

export default FullReportsCollaborators;
