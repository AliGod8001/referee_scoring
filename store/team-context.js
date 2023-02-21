import React, { useState, useEffect } from "react";

const TeamContext = React.createContext({
  teams: [],
  teamHandler: (action, item) => {},
  // addTeam: (team) => {},
  // removeTeam: (id) => {},
  // editTeam: (id) => {},
});

export const TeamContextProvider = (props) => {
  useEffect(() => {
    if (localStorage.getItem("TEAMS") !== null) {
      SetTeams(JSON.parse(localStorage.getItem("TEAMS")));
    }
  }, []);

  const [teams, SetTeams] = useState([]);

  const teamHandler = (action, item) => {
    if (action === "ADD") {
      SetTeams((prevState) => {
        return [item, ...prevState];
      });
      const updatedTeams = [...teams, item]
      localStorage.setItem("TEAMS", JSON.stringify(updatedTeams));
    } else if (action === "FIND_TEAM") {
      return teams.find((team) => team.id === item);
    } else if (action === "ADD_PLAY") {
      const teamIndex = teams.findIndex((team) => team.id === item.id);
      let team = teams[teamIndex];
      const updatedTeams = [...teams];

      team.plays.push(item.data);
      team[item.data.status] += 1;
      team.difference += ( item.data.difference)
      team.warning += item.data.warning

      if (item.data.status === "win") {
        team.point = team.point + 3;
      } else if (item.data.status === "draw") {
        team.point = team.point + 1;
      }

      updatedTeams[teamIndex] = team;
      SetTeams(updatedTeams);
      localStorage.setItem("TEAMS", JSON.stringify(updatedTeams));
    } else if (action === "EDIT_PLAY") {
      const teamIndex = teams.findIndex(team => team.id === item.pId)
      let team = teams[teamIndex]
      const playIndex = team.plays.findIndex(play => play.id === item.data.id)
      let play = team.plays[playIndex]
      const oldStatus = play.status
      const status = item.data.scoredGoal > item.data.recivedGoal ? 'win' : item.data.scoredGoal === item.data.recivedGoal ? "draw" : "lose"
      const change = play.status !== status
      const dif = play.difference
      play = {
        ...play,
        scoredGoal: item.data.scoredGoal,
        recivedGoal: item.data.recivedGoal,
        difference: ( item.data.scoredGoal - item.data.recivedGoal),
        status
      }
      const updatedPlays = [...team.plays]
      updatedPlays[playIndex] = play
      team.plays = updatedPlays

      if ( change ) {
        if ( oldStatus === 'draw' && status === 'win' ) {
          team.point += 2
        } else if ( oldStatus === 'draw' && status === 'lose' ) {
          team.point -= 1
        } else if ( oldStatus === 'win' && status === 'draw' ) {
          team.point -= 2
        } else if ( oldStatus === 'win' && status === 'lose' ) {
          team.point -= 3
        } else if ( oldStatus === 'lose' && status === 'draw' ) {
          team.point += 1
        } else if ( oldStatus === 'lose' && status === 'win' )  {
          team.point += 3
        }
      }
      
      team.difference = team.difference - dif + (play.difference)

      const updatedTeams = [...teams]
      updatedTeams[teamIndex] = team
      SetTeams(updatedTeams);
      localStorage.setItem("TEAMS", JSON.stringify(updatedTeams));
    } else if ( action === "DELETE_PLAY") {
      const teamIndex = teams.findIndex(team => team.id === item.pId)
      const team = teams[teamIndex]
      const play = team.plays.find(play => play.id === item.id)
      team.plays = team.plays.filter(play => play.id !== item.id)

      if ( play.status === 'win' ) {
        team.point -= 3
        team.win -=1
      } else if ( play.status === 'draw' ) {
        team.point -= 1
        team.draw -= 1
      } else {
        team.lose -= 1
      }

      team.difference -= play.difference
      team.warning -= play.warning

      const updatedTeams = [...teams]
      updatedTeams[teamIndex] = team
      SetTeams(updatedTeams)
      localStorage.setItem("TEAMS", JSON.stringify(updatedTeams));
    } else if (action === "REMOVE") {
      const updatedTeams = teams.filter((team) => team.id !== item);
      SetTeams(updatedTeams);
      localStorage.setItem("TEAMS", JSON.stringify(updatedTeams));
    }
  };

  const TeamContextValue = {
    teams,
    teamHandler,
  };

  return (
    <TeamContext.Provider value={TeamContextValue}>
      {props.children}
    </TeamContext.Provider>
  );
};

export default TeamContext;
