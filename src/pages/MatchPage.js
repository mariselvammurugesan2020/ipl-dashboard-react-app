import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchDetailCard from "../components/MatchDetailCard";
import { YearSelector } from "../components/YearSelector";
import "./MatchPage.scss";

export const MatchPage = () => {
  const { teamName, year } = useParams();
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    const fectchMatches = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_ROOT_URL}/team/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      console.log(data);
      setMatches(data);
    };
    fectchMatches();
  }, [teamName, year]);

  return (
    <div className="MatchPage">
      <div className="year-selector">
        <h3>Select Year </h3>
        <YearSelector teamName={teamName} />
      </div>
      <div>
        <h1 className="page-heading">
          {teamName} matches in {year}
        </h1>
        {matches.map((match) => (
          <MatchDetailCard key={match.id} match={match} teamName={teamName} />
        ))}
      </div>
    </div>
  );
};

export default MatchPage;
