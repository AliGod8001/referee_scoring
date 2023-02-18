import { interpolateAs } from "next/dist/shared/lib/router/router";
import { useForm } from "react-hook-form";

import MainButton from "../ui/buttons/MainButton";

import styles from "./AddTeamForm.module.scss";

const AddTeamForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onAddTeamFormSubmit = (data) => {
      props.onAddTeam({name: data.teamName, point: data.initialPoint === '' ? 0 : parseInt(data.initialPoint)})
  };

  const teamNameClass = `${styles.control} ${
    errors.teamName !== undefined ? styles.error : ""
  }`;
  const initialPointClass = `${styles.control} ${
    errors.initialPoint !== undefined ? styles.error : ""
  }`;

  return (
    <form className={styles.card} onSubmit={handleSubmit(onAddTeamFormSubmit)}>
      <div className={teamNameClass}>
        <label>نام تیم</label>
        <input
          {...register("teamName", { required: "نام تیم را باید وارد کنید." })}
          placeholder="نام تیم ..."
        ></input>
        {errors.teamName !== undefined && (
          <span className={styles.err}>{errors.teamName.message}</span>
        )}
      </div>
      <div className={initialPointClass}>
        <label>امتیاز اولیه</label>
        <input
          {...register("initialPoint", { min: 0})}
          placeholder="امتیاز اولیه ..."
        ></input>
        {errors.initialPoint !== undefined && (
          <span className={styles.err}>{errors.initialPoint.message}</span>
        )}
      </div>
      <div className={styles.action}>
        <MainButton>ثبت تیم</MainButton>
      </div>
    </form>
  );
};

export default AddTeamForm;
