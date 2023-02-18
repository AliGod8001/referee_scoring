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
      localStorage.setItem("TEAMS", JSON.stringify([...teams, item]));
    } else if (action === "FIND_TEAM") {
      return teams.find((team) => team.id === item);
    } else if (action === "ADD_PLAY") {
      const teamIndex = teams.findIndex((team) => team.id === item.id);
      let team = teams[teamIndex];
      const updatedTeams = [...teams];

      team.plays.push(item.data);
      team[item.data.status] += 1;

      if (item.data.status === "win") {
        team.point = team.point + 3;
      } else if (item.data.status === "draw") {
        team.point = team.point + 1;
      }

      updatedTeams[teamIndex] = team;
      SetTeams(updatedTeams);
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
