import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChooseThe3TypesUser.module.css";

const ChooseThe3TypesUser = () => {
  const navigate = useNavigate();

  const onRegularEmployeeContainerClick = useCallback(() => {
    navigate("/sign-in-collaborator-2");
  }, [navigate]);

  const onAdministratorContainerClick = useCallback(() => {
    navigate("/sign-in-admin-2");
  }, [navigate]);

  const onHRContainerClick = useCallback(() => {
    navigate("/sign-in-hr");
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
        <div
          className={styles.regularEmployee}
          onClick={onRegularEmployeeContainerClick}
        >
          <b className={styles.button}> Employee</b>
        </div>
        <div
          className={styles.administrator}
          onClick={onAdministratorContainerClick}
        >
          <b className={styles.administrator1}>Administrator</b>
        </div>
        <div className={styles.hr} onClick={onHRContainerClick}>
          <b className={styles.button1}>HR</b>
        </div>
        <div className={styles.header}>
          <b className={styles.areYouAn}>
            Are you from HR, an Administrator or an Employee?
          </b>
        </div>
        <div className={styles.welcomePleaseSelect}>
          Welcome! Please select your role:
        </div>
        <div className={styles.logo}>
          <img className={styles.logo1Icon} alt="" src="/logo-11@2x.png" />
        </div>
      </div>
      <img className={styles.coverIcon} alt="" src="/cover.svg" />
    </div>
  );
};

export default ChooseThe3TypesUser;
