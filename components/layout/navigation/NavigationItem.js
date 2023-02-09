import Link from 'next/link';

import styles from './NavigationItem.module.scss';

const NavigationItem = props => {
    return <Link href={props.href}>
        <a className={`${styles.item} ${props.activeItem ? styles.active : ""}`}>
            <span>{props.title}</span>
        </a>
    </Link>
}

export default NavigationItem;