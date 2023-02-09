import React, { useState, useEffect } from "react";

const TeamContext = React.createContext({
    teams: [],
    teamHandler: (action, item) => {},
    // addTeam: (team) => {},
    // removeTeam: (id) => {},
    // editTeam: (id) => {},
})

export const TeamContextProvider = props => {
    useEffect(() => {
        if ( localStorage.getItem("TEAMS") !== null ) {
            SetTeams(JSON.parse(localStorage.getItem("TEAMS")))
        }
    },[])

    const [teams, SetTeams] = useState([])

    const teamHandler = (action, item) => {
        if ( action === "ADD" ) {
            let sortedTeam = quickSort([...teams, item], 0, teams.length)
            SetTeams(sortedTeam)
            localStorage.setItem("TEAMS", JSON.stringify([...teams, item]))
        } else if ( action === "FIND_TEAM" ) {
            return teams.find(team => team.id === item)
        }
    }

    const TeamContextValue = {
        teams,
        teamHandler
    }

    return <TeamContext.Provider value={TeamContextValue}>
        {props.children}
    </TeamContext.Provider>
}

export default TeamContext;


function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
 
function partition(arr, low, high) {
    let pivot = arr[high].point;
    let i = (low - 1);
 
    for (let j = low; j <= high - 1; j++) {
        if (arr[j].point > pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}
 
function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }

    return arr
}