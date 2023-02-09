import styles from "./DetailCard.module.scss";

const DetailCard = (props) => {
  const classes = `${styles.card} ${props.className ? props.className : ""}`;
  return <div className={classes}>{props.children}</div>;
};

export default DetailCard;
