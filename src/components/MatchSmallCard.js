import React from "react";
import { Link } from "react-router-dom";
import "./MatchSmallCard.scss";
export const MatchSmallCard = ({ match, teamName }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = match.matchwinner === teamName;

  return (
    <div
      className={
        isMatchWon ? "MatchSmallCard won-card" : "MatchSmallCard loss-card"
      }
    >
      <span className="verus">vs</span>
      <h1>
        <Link to={otherTeamRoute}>{otherTeam}</Link>
      </h1>
      <p className="match-result">
        {match.matchwinner} Won by {match.resultmargin} {match.result}
      </p>
    </div>
  );
};

export default MatchSmallCard;
