import Link from "next/link";

import Icon from '../ui/Icon'

import styles from "./TeamItem.module.scss";

const TeamItem = (props) => {
  return (
    <Link href={`/teams/${props.id}`}>
      <div className={styles.teams}>{props.teamInfo.name}
        <span className={styles.point}>{props.teamInfo.point}<Icon icon='star-fill' /></span>
      </div>
    </Link>
  );
};

export default TeamItem;
