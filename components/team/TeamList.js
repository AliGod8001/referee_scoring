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
    const sortedTeam = linearSearch(props.teams)
    console.log(sortedTeam)
    output = sortedTeam.map((team) => (
      <TeamItem key={team.id} id={team.id} teamInfo={team} />
    ));
  }

  return <section className={styles.wrapper}>{output}</section>;
};

export default TeamList;

const linearSearch = arr => {
  const n = arr.length

  for (let i = 0; i < n; i++) {
    let m = i
    for (let j = i+1; j < n-1; j++) {
      if ( arr[j].point > arr[m].point ) {
        m = j
      } else if ( arr[j].point === arr[m].point ) {
        if ( arr[j].difference > arr[m].difference ) {
          m = j
        }
      }
    }

    if ( m !== i) {
      swap(arr, i, m)
    }
  }

  return arr
}

const swap = (arr, a, b) => {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}