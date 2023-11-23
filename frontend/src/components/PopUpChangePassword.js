import styles from "./PopUpChangePassword.module.css";

const PopUpChangePassword = ({ onClose }) => {
  return (
    <div className={styles.popUpChangePassword}>
      <img className={styles.dangerSquareIcon} alt="" src="/dangersquare.svg" />
      <b className={styles.thePasswordHas}>The password has been updated</b>
    </div>
  );
};

export default PopUpChangePassword;
