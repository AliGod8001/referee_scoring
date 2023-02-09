import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";

import TeamContext from '../../store/team-context';

import Layout from '../layout/Layout'
import AddTeamForm from "./AddTeamForm";

const AddTeam = () => {
    const teamCtx = useContext(TeamContext)
    const router = useRouter()

    const addTeamHandler = team => {
        const sendTeam = {
            id: new Date().getTime().toString(),
            ...team,
            plays: []
        }

        teamCtx.teamHandler('ADD', sendTeam)
        router.push("/teams")
    }

    return <Layout>
        <Head>
            <title>اضافه کردن تیم | امتیاز دهی تیم ها</title>
        </Head>
        <AddTeamForm onAddTeam={addTeamHandler} />
    </Layout>
}

export default AddTeam;