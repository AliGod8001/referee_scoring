import { useForm } from "react-hook-form";
import MainButton from "../ui/buttons/MainButton";

import DetailCard from "../ui/card/DetailCard";
import styles from "./TeamDetailForm.module.scss";

const setStatus = (sGoal, rGoal) => {
    if ( sGoal > rGoal )
        return "win"
    else if ( rGoal > sGoal )
        return "lose"
    else 
        return "draw"
}

const TeamDetailForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onAddPlaySubmit = (data) => {
    props.onAddPlay({
        id: new Date().getTime().toString(),
        status: setStatus(parseInt(data.scoredGoal), parseInt(data.recivedGoal)),
        difference: parseInt(data.scoredGoal - data.recivedGoal),
        recivedGoal: parseInt(data.recivedGoal),
        scoredGoal: parseInt(data.scoredGoal),
        warning: parseInt(data.warning)
    })
  };

  const scoredGoalClass = `${styles.control} ${
    errors.scoredGoal !== undefined ? styles.error : ""
  }`;
  const recivedGoalClass = `${styles.control} ${
    errors.recivedGoal !== undefined ? styles.error : ""
  }`;
  const warningClass = `${styles.control} ${
    errors.warning !== undefined ? styles.error : ""
  }`;

  return (
    <DetailCard className={styles.card}>
      <form className={styles.form} onSubmit={handleSubmit(onAddPlaySubmit)}>
        <div className={scoredGoalClass}>
          <label>گل زده</label>
          <input type="number" {...register("scoredGoal", { required: "گل زده را باید وارد کنید" })} />
          {errors.scoredGoal !== undefined && <span className={styles.err}>{errors.scoredGoal.message}</span>}
        </div>
        <div className={recivedGoalClass}>
          <label>گل خورده</label>
          <input type="number" {...register("recivedGoal", { required: "گل خورده را باید وارد کنید" })} />
          {errors.recivedGoal !== undefined && <span className={styles.err}>{errors.recivedGoal.message}</span>}
        </div>
        <div className={warningClass}>
          <label>اخطار</label>
          <input type="number" {...register("warning", { required: "اخطار را باید وارد کنید" })} />
          {errors.warning !== undefined && <span className={styles.err}>{errors.warning.message}</span>}
        </div>
        <div className={styles.action}>
          <MainButton>ثبت بازی جدید</MainButton>
        </div>
      </form>
    </DetailCard>
  );
};

export default TeamDetailForm;
