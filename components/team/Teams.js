import Head from "next/head";
import { useContext } from "react";
import TeamContext from "../../store/team-context";

import Layout from "../layout/Layout";
import TeamList from "./TeamList";


const Teams = props => {
    const TeamCtx = useContext(TeamContext)

    return <>
        <Layout>
            <Head>
                <title>صفحه اصلی | امتیاز دهی تیم ها</title>
            </Head>
            <TeamList teams={TeamCtx.teams} />
        </Layout>
    </>
}

export default Teams;