import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileHR.module.css";

const ProfileHR = () => {
  const navigate = useNavigate();

  const onSettingsContainerClick = useCallback(() => {
    navigate("/settings-hr");
  }, [navigate]);

  const onHelpContainerClick = useCallback(() => {
    navigate("/help-hr");
  }, [navigate]);

  const onColaboratorInformationContainerClick = useCallback(() => {
    navigate("/collaborator-info");
  }, [navigate]);

  const onRemoveColaboratorContainerClick = useCallback(() => {
    navigate("/remove-colaborator");
  }, [navigate]);

  const onAddColaboratorContainerClick = useCallback(() => {
    navigate("/add-colaborator");
  }, [navigate]);

  return (
    <div className={styles.profileHr}>
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
            <p className={styles.fullNameRafaelDosSantos}>
              <span>
                <b className={styles.fullName}>{`Full Name : `}</b>
                <span className={styles.rafaelDosSantos}>
                  Rafael dos Santos Augusto
                </span>
              </span>
            </p>
            <p className={styles.fullNameRafaelDosSantos}>
              <span>
                <span className={styles.rafaelDosSantos}>&nbsp;</span>
              </span>
            </p>
            <p className={styles.fullNameRafaelDosSantos}>
              <span>
                <b className={styles.fullName}>Age:</b>
                <span> 31</span>
              </span>
            </p>
            <p className={styles.fullNameRafaelDosSantos}>
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.fullNameRafaelDosSantos}>
              <span>
                <b>Gender:</b>
                <span> Male</span>
              </span>
            </p>
            <p className={styles.fullNameRafaelDosSantos}>
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.fullNameRafaelDosSantos}>
              <span>
                <b className={styles.fullName}>Phone Number:</b>
                <span> + 351 913 900 489</span>
              </span>
            </p>
            <p className={styles.fullNameRafaelDosSantos}>
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.fullNameRafaelDosSantos}>
              <span>
                <b className={styles.fullName}>{`Address: `}</b>
              </span>
              <span>
                <span className={styles.rAbelManta}>
                  4 R. Abel Manta, Odivelas , Lisboa
                </span>
              </span>
              <span>
                <span>{` `}</span>
              </span>
            </p>
            <p className={styles.fullNameRafaelDosSantos}>
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.fullNameRafaelDosSantos}>
              <span>
                <b className={styles.fullName}>Company:</b>
                <span> DHL Express Portugal</span>
              </span>
            </p>
            <p className={styles.fullNameRafaelDosSantos}>
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.fullNameRafaelDosSantos}>
              <span>
                <b className={styles.fullName}>{`Company Address: `}</b>
                <span>
                  Aeroporto de Lisboa, Edificio 124, 2º Piso-Gab.1A, 1700-008
                  Lisboa
                </span>
              </span>
            </p>
            <p className={styles.fullNameRafaelDosSantos}>
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.fullNameRafaelDosSantos}>
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.fullNameRafaelDosSantos}>
              <span>
                <b>&nbsp;</b>
              </span>
            </p>
          </div>
          <b className={styles.name}>Rafael Augusto</b>
          <div className={styles.editPhotoButton}>
            <b className={styles.button}>Edit Photo</b>
          </div>
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
            className={styles.colaboratorInformation}
            onClick={onColaboratorInformationContainerClick}
          >
            <div className={styles.colaboratorInformation1}>
              Collaborator Information
            </div>
          </div>
          <div
            className={styles.removeColaborator}
            onClick={onRemoveColaboratorContainerClick}
          >
            <div className={styles.colaboratorInformation1}>
              Remove Colaborator
            </div>
          </div>
          <div
            className={styles.addColaborator}
            onClick={onAddColaboratorContainerClick}
          >
            <div className={styles.colaboratorInformation1}>
              Add Colaborator
            </div>
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
  );
};

export default ProfileHR;
