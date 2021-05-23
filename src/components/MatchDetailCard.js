import React from "react";
import { Link } from "react-router-dom";
import "./MatchDetailCard.scss";
export const MatchDetailCard = ({ match, teamName }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = match.matchwinner === teamName;
  return (
    <div
      className={
        isMatchWon ? "MatchDetailCard won-card" : "MatchDetailCard loss-card"
      }
    >
      <div className="match-details">
        <span className="verus">vs</span>
        <h1>
          <Link to={otherTeamRoute}>{otherTeam}</Link>
        </h1>

        <h2 className="match-date">{match.date}</h2>
        <h3 className="match-venue">at {match.venue}</h3>
        <h3 className="match-result">
          {match.matchwinner} Won by {match.resultmargin} {match.result}
        </h3>
      </div>
      <div className="innings-additional-details">
        <h3>First Innings </h3>
        <p>{match.team1}</p>
        <h3>Second Innings </h3>
        <p>{match.team2}</p>
        <h3>Man Of The Match </h3>
        <p>{match.playerofmatch}</p>
        <h3>Umpires </h3>
        <p>
          {match.umpire1} , {match.umpire2}
        </p>
      </div>
    </div>
  );
};

export default MatchDetailCard;
