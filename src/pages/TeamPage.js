import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";
import "./TeamPage.scss";
import { PieChart } from "react-minimal-pie-chart";
import { Link } from "react-router-dom";
export const TeamPage = () => {
  const { teamName } = useParams();
  useEffect(() => {
    const fectchMatches = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_ROOT_URL}/team/${teamName}?noOfRecords=4`
      );
      const data = await response.json();
      console.log(data);
      setTeam(data);
    };
    fectchMatches();
  }, [teamName]);

  const [team, setTeam] = useState({ matches: [] });
  if (!team || !team.matches) {
    return <h1>Team Not Found</h1>;
  }
  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <h1 className="teamName">{team.teamName}</h1>
      </div>
      <div className="win-loss-section">
        Wins/Losses
        <PieChart
          data={[
            {
              title: "Losses",
              value: team.totalMatches - team.totalWins,
              color: "#b1404f",
            },
            { title: "Wins", value: team.totalWins, color: "#79d79e" },
          ]}
        />
      </div>

      <div className="match-detail-section">
        <h3>Latest Matches</h3>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      </div>
      {team.matches.slice(1).map((match) => (
        <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />
      ))}
      <div className="more-link">
        <Link
          to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}
        >
          More >
        </Link>
      </div>
    </div>
  );
};

export default TeamPage;
