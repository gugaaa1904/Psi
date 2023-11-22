import styles from "./PopUpRemoveColaborator.module.css";

const PopUpRemoveColaborator = ({ onClose }) => {
  return (
    <div className={styles.popUpRemoveColaborator}>
      <img className={styles.dangerSquareIcon} alt="" src="/dangersquare.svg" />
      <b className={styles.theColaboratorHas}>
        The colaborator has been Removed
      </b>
    </div>
  );
};

export default PopUpRemoveColaborator;
