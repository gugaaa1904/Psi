import styles from "./PTNotifications.module.css";

const Notifications = () => {
  return (
    <div className={styles.notifications}>
      <b className={styles.notifications1}>Notificações</b>
      <div className={styles.line} />
      <div className={styles.message2}>
        <img
          className={styles.dangerSquareIcon}
          alt=""
          src="/dangersquare.svg"
        />
        <b className={styles.alertExcessiveUse}>
          Alerta: Utilização excessiva de energia!
        </b>
      </div>
      <div className={styles.message2}>
        <img
          className={styles.dangerSquareIcon}
          alt=""
          src="/dangersquare.svg"
        />
        <b className={styles.alertExcessiveUse}>
          Alerta: Utilização excessiva de energia!
        </b>
      </div>
      <div className={styles.message2}>
        <img
          className={styles.dangerSquareIcon}
          alt=""
          src="/dangersquare.svg"
        />
        <b className={styles.alertExcessiveUse}>
          Alerta: Utilização excessiva de energia!
        </b>
      </div>
      <div className={styles.message2}>
        <img
          className={styles.dangerSquareIcon}
          alt=""
          src="/dangersquare.svg"
        />
        <b className={styles.alertExcessiveUse}>
          Alerta: Utilização excessiva de energia!
        </b>
      </div>
      <div className={styles.message2}>
        <img
          className={styles.dangerSquareIcon}
          alt=""
          src="/dangersquare.svg"
        />
        <b className={styles.alertExcessiveUse}>
          Alerta: Utilização excessiva de energia!
        </b>
      </div>
    </div>
  );
};

export default Notifications;
