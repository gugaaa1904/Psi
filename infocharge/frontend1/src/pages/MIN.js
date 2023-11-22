import styles from "./MIN.module.css";

const MIN = () => {
  return (
    <div className={styles.min}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.kw}>1 kW</div>
      </div>
    </div>
  );
};

export default MIN;
