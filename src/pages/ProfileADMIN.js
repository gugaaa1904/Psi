import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileADMIN.module.css";

const ProfileADMIN = () => {
  const navigate = useNavigate();

  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-admin");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/help-admin");
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

  const onAddUserContainerClick = useCallback(() => {
    navigate("/add-user");
  }, [navigate]);

  return (
    <div className={styles.profileAdmin}>
      <div className={styles.content}>
        <div className={styles.backgroundImage}>
          <img
            className={styles.unsplashNwaetf6qo0Icon}
            alt=""
            src="/unsplash-nwaetf6qo0@2x.png"
          />
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.profileInfoChild} />
          <div className={styles.fullNameContainer}>
            <p className={styles.fullNameJosAlbertoDosS}>
              <b className={styles.fullName}>{`Full Name : `}</b>
              <span className={styles.josAlbertoDos}>
                José Alberto dos Santos Maria
              </span>
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.fullNameJosAlbertoDosS}>
              <b className={styles.fullName}>Age:</b>
              <span> 56</span>
            </p>
            <p className={styles.fullNameJosAlbertoDosS}>&nbsp;</p>
            <p className={styles.fullNameJosAlbertoDosS}>
              <b>Gender:</b>
              <span className={styles.fullName}> Male</span>
            </p>
            <p className={styles.fullNameJosAlbertoDosS}>&nbsp;</p>
            <p className={styles.fullNameJosAlbertoDosS}>
              <b className={styles.fullName}>Phone Number:</b>
              <span> + 351 968 912 443</span>
            </p>
            <p className={styles.fullNameJosAlbertoDosS}>&nbsp;</p>
            <p className={styles.fullNameJosAlbertoDosS}>
              <b className={styles.fullName}>Address:</b>
              <span> 4 R. Abel Manta, Odivelas , Lisboa</span>
            </p>
            <p className={styles.fullNameJosAlbertoDosS}>&nbsp;</p>
            <p className={styles.fullNameJosAlbertoDosS}>
              <b className={styles.fullName}>Company:</b>
              <span> DHL Express Portugal</span>
            </p>
            <p className={styles.fullNameJosAlbertoDosS}>&nbsp;</p>
            <p className={styles.fullNameJosAlbertoDosS}>
              <b className={styles.fullName}>{`Company Address: `}</b>
              <span>
                Aeroporto de Lisboa, Edificio 124, 2º Piso-Gab.1A, 1700-008
                Lisboa
              </span>
            </p>
            <p className={styles.fullNameJosAlbertoDosS}>&nbsp;</p>
            <p className={styles.fullNameJosAlbertoDosS}>&nbsp;</p>
            <p className={styles.fullNameJosAlbertoDosS}>
              <b>&nbsp;</b>
            </p>
          </div>
          <div className={styles.editPhotoButton}>
            <b className={styles.button}>Edit Photo</b>
          </div>
          <b className={styles.name}>José Maria</b>
        </div>
        <img className={styles.profileIcon} alt="" src="/profile.svg" />
      </div>
      <div className={styles.header}>
        <b className={styles.profile}>Profile</b>
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
          <div className={styles.profile1}>
            <b className={styles.profile2}>Profile</b>
          </div>
          <div
            className={styles.collaboratorInformation}
            onClick={onCollaboratorInformationContainerClick}
          >
            <div className={styles.collaboratorInformation1}>
              Collaborator Information
            </div>
          </div>
          <div
            className={styles.companyInformation}
            onClick={onCompanyInformationContainerClick}
          >
            <div className={styles.collaboratorInformation1}>
              Company Information
            </div>
          </div>
          <div
            className={styles.removeUser}
            onClick={onRemoveUserContainerClick}
          >
            <div className={styles.collaboratorInformation1}>Remove User</div>
          </div>
          <div className={styles.addUser} onClick={onAddUserContainerClick}>
            <div className={styles.collaboratorInformation1}>Add User</div>
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
  );
};

export default ProfileADMIN;
