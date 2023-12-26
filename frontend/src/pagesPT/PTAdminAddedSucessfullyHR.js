import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PTAdminAddedSucessfullyHR.module.css";

const AdminAddedSucessfullyHR = () => {
  const navigate = useNavigate();

  const onNextButtonClick = useCallback(() => {
    navigate("/sign-in-admin");
  }, [navigate]);

  return (
    <div className={styles.adminAddedSucessfullyHr}>
      <div className={styles.content}>
        <img
          className={styles.nextButtonIcon}
          alt=""
          src="/next-button.svg"
          onClick={onNextButtonClick}
        />
        <b className={styles.adminAddedSucessfully}>Admin Added Sucessfully</b>
        <img className={styles.checkCircleIcon} alt="" src="/checkcircle.svg" />
      </div>
      <div className={styles.logo}>
        <img className={styles.logo1Icon} alt="" src="/logo-12@2x.png" />
      </div>
    </div>
  );
};

export default AdminAddedSucessfullyHR;
