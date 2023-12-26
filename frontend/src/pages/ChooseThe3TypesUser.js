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

  const onPortuguesContainerClick = useCallback(() => {
    navigate("/pt-main");
  }, [navigate]);

  return (
    <div className={styles.chooseThe3TypesUser}>
      <div className={styles.content}>
        <div className={styles.background}></div>
        <div className={styles.language}>
          <div className={styles.tabs}>
            <div className={styles.portuguese} onClick={onPortuguesContainerClick}>
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
          <b className={styles.button}> Sign In Collaborator</b>
        </div>

        <div
          className={styles.administrator}
          onClick={onAdministratorContainerClick}
        >
          <b className={styles.administrator1}>Sign In Administrator</b>
        </div>

        <b className={styles.areYouAn}>
          Welcome to InfoCharge ! Good to have you here !
        </b>

        <div className={styles.welcomePleaseSelect}>
          To explore the app, please select how do you want to sign in:
        </div>

        <div className={styles.logo}>
          <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
        </div>
      </div>
      <img className={styles.covericon} alt="" src="/electric_car_buying.jpg" />
    </div>
  );
};

export default ChooseThe3TypesUser;
