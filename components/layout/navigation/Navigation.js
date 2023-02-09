import { useRouter } from 'next/router';
import NavigationItem from './NavigationItem';

import styles from './Navigation.module.scss'

const HEADER_INFO = [
    {
        id: '01',
        title: 'لیست تیم ها',
        titleEn: 'teams',
        href: '/teams'
    },
    {
        id: '02',
        title: 'اضافه کردن تیم',
        titleEn: 'add',
        href: '/add'
    }
]

const Navigation = props => {
    const router = useRouter()
    const currentPath = router.asPath;
    let active = ''

    if ( currentPath.startsWith('/teams') ) {
        active = 'teams'
    }
    else if ( currentPath.startsWith("/add") ) {
        active = 'add'
    }

    return <header className={styles.header}>
        {HEADER_INFO.map(info => <NavigationItem key={info.id} href={info.href} title={info.title} activeItem={active===info.titleEn} />)}
    </header>
}

export default Navigation;