import styles from "./PlaysItem.module.scss";

const PlaysItem = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          {props.status === "draw"
            ? "مساوی"
            : props.status === "win"
            ? "برد"
            : "باخت"}
        </div>
      </div>
      <div className={`${styles.item} ${styles.success}`}>
        <span className={styles.text}>گل های زده :</span>
        <span className={styles.title}>{props.sGoal}</span>
      </div>
      <div className={`${styles.item} ${styles.error}`}>
        <span className={styles.text}>گل های خورده :</span>
        <span className={styles.title}>{props.rGoal}</span>
      </div>
    </div>
  );
};

export default PlaysItem;
