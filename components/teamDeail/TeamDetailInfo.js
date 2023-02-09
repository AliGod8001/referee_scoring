import MainButton from "../ui/buttons/MainButton";
import DetailCard from "../ui/card/DetailCard";
import Icon from '../ui/Icon'

import styles from "./TeamDetailInfo.module.scss";

const TeamDetailInfo = (props) => {

  const RemoveTeamHandler = () => {
    props.onRemoveTeam(props.id)
  }

  return (
    <DetailCard className={styles.card}>
        <div className={styles.header}>
            <div className={styles.name}>{props.teamInfo.name}</div>
            <div className={styles.star}>
                {props.teamInfo.point}
                <Icon icon="star-fill" />
            </div>
        </div>
        <div className={styles.body}>
          <div className={styles.item}>
            <span className={styles.text}>کل بازی ها :</span>
            <span className={styles.title}>{props.teamInfo.plays.length}</span>
          </div>
          <div className={`${styles.item} ${styles.success}`}>
            <span className={styles.text}>بازی های برده :</span>
            <span className={styles.title}>{props.teamInfo.win}</span>
          </div>
          <div className={`${styles.item} ${styles.error}`}>
            <span className={styles.text}>بازی های باخته :</span>
            <span className={styles.title}>{props.teamInfo.lose}</span>
          </div>
          <div className={`${styles.item} ${styles.warning}`}>
            <span className={styles.text}>بازی های مساوی :</span>
            <span className={styles.title}>{props.teamInfo.draw}</span>
          </div>
          <div className={`${styles.item} ${styles.success}`}>
            <span className={styles.text}>گل های زده :</span>
            <span className={styles.title}>{props.teamInfo.scoredGoal}</span>
          </div>
          <div className={`${styles.item} ${styles.error}`}>
            <span className={styles.text}>گل های خورده :</span>
            <span className={styles.title}>{props.teamInfo.recivedGoal}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.text}>اخطار :</span>
            <span className={styles.title}>{props.teamInfo.warning}</span>
          </div>
          <div className={styles.action}>
            <MainButton onClick={RemoveTeamHandler}>حذف تیم</MainButton>
          </div>
        </div>
    </DetailCard>
  );
};

export default TeamDetailInfo;
