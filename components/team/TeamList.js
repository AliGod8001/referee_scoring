import { useRouter } from "next/router";

import MainButton from "../ui/buttons/MainButton";
import TeamItem from "./TeamItem";

import styles from "./TeamList.module.scss";

const TeamList = (props) => {
  const router = useRouter()

  const ChangeViewHandler = event => {
    router.push('/add')
  }

  let output = (
    <div className={styles.notFound}>
      هیچ تیمی ندارید
      <MainButton onClick={ChangeViewHandler}>اضافه کردن تیم</MainButton>
    </div>
  );

  if (props.teams.length > 0) {
    output = props.teams.map((team) => (
      <TeamItem key={team.id} id={team.id} teamInfo={team} />
    ));
  }

  return <section className={styles.wrapper}>{output}</section>;
};

export default TeamList;
