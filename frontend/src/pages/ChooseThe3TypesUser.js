import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChooseThe3TypesUser.module.css";

const ChooseThe3TypesUser = () => {
  const navigate = useNavigate();

  const onRegularEmployeeContainerClick = useCallback(() => {
    navigate("/sign-in-collaborator");
  }, [navigate]);

  const onAdministratorContainerClick = useCallback(() => {
    navigate("/sign-in-admin");
  }, [navigate]);

  return (
    <div className={styles.chooseThe3TypesUser}>
      <div className={styles.content}>
        <div className={styles.language}>
          <div className={styles.tabs}>
            <div className={styles.portuguese}>
              <div className={styles.portuguese1}>Português</div>
            </div>
            <div className={styles.english}>
              <div className={styles.english1}>English</div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
=======

>>>>>>> nodejs
        <div
          className={styles.regularEmployee}
          onClick={onRegularEmployeeContainerClick}
        >
          <b className={styles.button}> Employee</b>
        </div>
<<<<<<< HEAD
=======

>>>>>>> nodejs
        <div
          className={styles.administrator}
          onClick={onAdministratorContainerClick}
        >
          <b className={styles.administrator1}>Administrator</b>
        </div>
<<<<<<< HEAD
        <b className={styles.areYouAn}>
          Are you an Administrator or an Employee?
        </b>
        <div className={styles.welcomePleaseSelect}>
          Welcome! Please select your role:
        </div>
        <div className={styles.logo}>
          <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
        </div>
      </div>
      <img className={styles.coverIcon} alt="" src="/cover.svg" />
=======

        <b className={styles.areYouAn}>
          Are you an Administrator or an Employee?
        </b>

        <div className={styles.welcomePleaseSelect}>
          Welcome! Please select your role:
        </div>

        <div className={styles.logo}>
          <img
            className={styles.logo1Icon}
            alt=""
            src="/InfoCharge-removebg-preview.png"
          />
        </div>
      </div>
      <img
        className={styles.covericon}
        alt=""
        src="/Optimized-EletricCarsBG.jpg"
      />
>>>>>>> nodejs
    </div>
  );
};

export default ChooseThe3TypesUser;
