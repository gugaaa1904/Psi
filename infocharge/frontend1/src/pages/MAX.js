import styles from "./MAX.module.css";

const MAX = () => {
  return (
    <div className={styles.max}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.kw}>5 kW</div>
      </div>
    </div>
  );
};

export default MAX;
