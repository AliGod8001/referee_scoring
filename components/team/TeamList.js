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
    const sortedTeam = quickSort(props.teams, 0, props.teams.length-1)
    output = sortedTeam.map((team) => (
      <TeamItem key={team.id} id={team.id} teamInfo={team} />
    ));
  }

  return <section className={styles.wrapper}>{output}</section>;
};

export default TeamList;

const swap = (arr, a, b) => {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

const partition = (arr, l, h) => {
  const pivot = arr[h]
  let i = l-1

  for (let j = l; j <= h-1; j++) {
    if ( arr[j].point > pivot.point ) {
      i++;
      swap(arr, i, j)
    }
  }

  swap(arr, i+1, h)
  return i+1
}

const quickSort = (arr, l, h) => {
  if ( l < h ) {
    const p = partition(arr, l, h)
    quickSort(arr, l, p-1)
    quickSort(arr, p+1, h)
  }

  return arr;
}