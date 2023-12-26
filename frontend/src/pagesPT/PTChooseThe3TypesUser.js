import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PTChooseThe3TypesUser.module.css";

const ChooseThe3TypesUser = () => {
  const navigate = useNavigate();

  const onRegularEmployeeContainerClick = useCallback(() => {
    navigate("/pt-sign-in-collaborator");
  }, [navigate]);

  const onAdministratorContainerClick = useCallback(() => {
    navigate("/pt-sign-in-admin");
  }, [navigate]);

  const onEnglishContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);


  return (
    <div className={styles.chooseThe3TypesUser}>
      <div className={styles.content}>
        <div className={styles.background}></div>
        <div className={styles.language}>
          <div className={styles.tabs}>
            <div className={styles.portuguese}>
              <div className={styles.portuguese1}>Português</div>
            </div>
            <div className={styles.english} onClick={onEnglishContainerClick}>
              <div className={styles.english1}>English</div>
            </div>
          </div>
        </div>

        <div
          className={styles.regularEmployee}
          onClick={onRegularEmployeeContainerClick}
        >
          <b className={styles.button}> Iniciar Sessão Colaborador</b>
        </div>

        <div
          className={styles.administrator}
          onClick={onAdministratorContainerClick}
        >
          <b className={styles.administrator1}>Iniciar Sessão Administrador</b>
        </div>

        <b className={styles.areYouAn}>
          Bem-vindo à InfoCharge ! Que bom vê-lo aqui !
        </b>

        <div className={styles.welcomePleaseSelect}>
          Para explorar a app, por favor seleciona como deseja fazer sign in:
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
