import styles from "./Notifications1.module.css";

const Notifications1 = () => {
  return (
    <div className={styles.notifications}>
      <div className={styles.line} />
      <b className={styles.notifications1}>Notifications</b>
      <div className={styles.notificationsChild} />
      <div className={styles.notificationsItem} />
      <img className={styles.dangerSquareIcon} alt="" src="/dangersquare.svg" />
      <img
        className={styles.dangerSquareIcon1}
        alt=""
        src="/dangersquare.svg"
      />
      <b className={styles.alertExcessiveUse}>
        Alert: Excessive use of energy!
      </b>
      <b className={styles.alertExcessiveUse1}>
        Alert: Excessive use of energy!
      </b>
    </div>
  );
};

export default Notifications1;
