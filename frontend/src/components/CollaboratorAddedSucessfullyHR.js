import { useCallback } from "react";
import styles from "./CollaboratorAddedSucessfullyHR.module.css";
const CollaboratorAddedSucessfullyHR = () => {
  const onNextButtonClick = useCallback(() => {
    // Please sync "Sign In Admin" to the project
  }, []);

  return (
    <div className={styles.CollaboratorAddedSucessfullyHr}>
      <div className={styles.content}>
        <img
          className={styles.nextButtonIcon}
          alt=""
          src="/next-button.png"
          onClick={onNextButtonClick}
        />
        <b className={styles.CollaboratorAddedSucessfully1}>
          Collaborator Added Sucessfully
        </b>
        <img className={styles.checkCircleIcon} alt="" src="/checkcircle.png" />
      </div>
      <div className={styles.logo}>
        <img className={styles.logo1Icon} alt="" src="/logo-12@2x.png" />
      </div>
    </div>
  );
};

export default CollaboratorAddedSucessfullyHR;
