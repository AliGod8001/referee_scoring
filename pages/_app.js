import Router from 'next/router';
import NProgress from "nprogress";
import { TeamContextProvider } from '../store/team-context';

import "nprogress/nprogress.css";
import '../styles/globals.scss';

/* nProgress setup */
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <TeamContextProvider><Component {...pageProps} /></TeamContextProvider>
}

export default MyApp
