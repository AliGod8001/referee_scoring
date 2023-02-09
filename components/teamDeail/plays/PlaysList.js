import PlaysItem from "./PlaysItem";
import DetailCard from "../../ui/card/DetailCard";

import styles from "./PlaysList.module.scss";

const PlaysList = (props) => {
  let output = (
    <div className={styles.notFound}>هیچ بازی برای نمایش یافت نشد...</div>
  );

  if (props.lists.length > 0) {
    output = (
      <DetailCard>
        {props.lists.map(list => <PlaysItem key={list.id} id={list.id} status={list.status} rGoal={list.recivedGoal} sGoal={list.scoredGoal} />)}
      </DetailCard>
    );
  }
  return <>{output}</>;
};

export default PlaysList;
