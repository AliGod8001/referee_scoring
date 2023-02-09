import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";

import TeamContext from "../../store/team-context";

import ErrorPage from "../ui/error-page/ErrorPage";
import Layout from "../layout/Layout";
import TeamDetailInfo from "./TeamDetailInfo";
import PlaysList from "./plays/PlaysList";
import TeamDetailForm from "./TeamDetailForm";

const TeamDetail = () => {
  const router = useRouter();
  const teamCtx = useContext(TeamContext);

  const id = router.query.teamId;
  const team = teamCtx.teamHandler("FIND_TEAM", id);

  const addPlayHandler = data => {
    teamCtx.teamHandler("ADD_PLAY", {id, data})
  }

  const removeTeamHandler = id => {
    teamCtx.teamHandler("REMOVE", id)
    router.push('/teams')
  }

  return (
    <Layout>
      <Head>
        <title>جزئیات تیم | امتیاز دهی تیم</title>
      </Head>
      {team !== undefined ? (
        <>
          <TeamDetailInfo onRemoveTeam={removeTeamHandler} id={team.id} teamInfo={team} />
          <TeamDetailForm onAddPlay={addPlayHandler} />
          <PlaysList lists={team.plays} />
        </>
      ) : (
        <ErrorPage
          layout={false}
          title="تیم مورد نظر پیدا نشد..."
          href="/"
          img={{ src: "/images/content/404.svg", width: 400, height: 400 }}
        >
          برگشت به خانه
        </ErrorPage>
      )}
    </Layout>
  );
};

export default TeamDetail;
