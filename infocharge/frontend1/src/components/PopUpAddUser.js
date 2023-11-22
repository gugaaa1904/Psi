import styles from "./PopUpAddUser.module.css";

const PopUpAddUser = ({ onClose }) => {
  return (
    <div className={styles.popUpAddUser}>
      <img className={styles.dangerSquareIcon} alt="" src="/dangersquare.svg" />
      <b className={styles.aNewUser}>A New user has been Added</b>
    </div>
  );
};

export default PopUpAddUser;
