import styles from "./PopUpRemoveUser.module.css";

const PopUpRemoveUser = ({ onClose }) => {
  return (
    <div className={styles.popUpRemoveUser}>
      <img className={styles.dangerSquareIcon} alt="" src="/dangersquare.svg" />
      <b className={styles.theUserHas}>The user has been Removed</b>
    </div>
  );
};

export default PopUpRemoveUser;
