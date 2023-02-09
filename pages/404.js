/* components import */
import ErrorPage from '../components/ui/error-page/ErrorPage';

const NotfoundPage = () => {
    return <ErrorPage 
        title="صفحه مد نظر پیدا نشد ..." 
        href="/"
        img={{src: '/images/content/404.svg',width: 400,height: 400}}
    >
        برگشت به خانه
    </ErrorPage>
}

export default NotfoundPage;