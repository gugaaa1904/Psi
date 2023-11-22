import styles from "./PopUpAddColaborator.module.css";

const PopUpAddColaborator = ({ onClose }) => {
  return (
    <div className={styles.popUpAddColaborator}>
      <img className={styles.dangerSquareIcon} alt="" src="/dangersquare.svg" />
      <b className={styles.aNewColaborator}>A New colaborator has been Added</b>
    </div>
  );
};

export default PopUpAddColaborator;
