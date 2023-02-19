import { useContext, useRef } from "react";
import { useRouter } from "next/router";
import TeamContext from "../../../store/team-context";

import MainButton from "../../ui/buttons/MainButton";
import styles from "./PlaysItem.module.scss";

const PlaysItem = (props) => {
  const teamCtx = useContext(TeamContext);
  const router = useRouter();
  const sGoalInputRef = useRef();
  const rGoalInputRef = useRef();

  const editPlayHandler = () => {
    if ( !(props.sGoal === parseInt(sGoalInputRef.current.value) && props.rGoal === parseInt(rGoalInputRef.current.value)) ) {
      teamCtx.teamHandler('EDIT_PLAY', {
        pId: router.query.teamId,
        data: {
          id: props.id,
          scoredGoal: parseInt(sGoalInputRef.current.value),
          recivedGoal: parseInt(rGoalInputRef.current.value)
        }
      })
    }
  }

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
        <MainButton onClick={editPlayHandler}>تغییر تیم</MainButton>
      </div>
      <div className={`${styles.item} ${styles.success}`}>
        <span className={styles.text}>گل های زده :</span>
        <input type="number" defaultValue={props?.sGoal} ref={sGoalInputRef} />
        {/* <span className={styles.title}>{props.sGoal}</span> */}
      </div>
      <div className={`${styles.item} ${styles.error}`}>
        <span className={styles.text}>گل های خورده :</span>
        <input type='number' defaultValue={props?.rGoal} ref={rGoalInputRef} />
        {/* <span className={styles.title}>{props.rGoal}</span> */}
      </div>
    </div>
  );
};

export default PlaysItem;
