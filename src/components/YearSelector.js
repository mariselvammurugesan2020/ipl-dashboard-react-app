import React from "react";
import { Link } from "react-router-dom";
import "./YearSelector.scss";

export const YearSelector = ({ teamName }) => {
  let years = [];
  const startYear = process.env.REACT_APP_DATA_START_YEAR;
  console.log("startYear" + startYear);
  const endYear = process.env.REACT_APP_DATA_END_YEAR;
  console.log("endYear" + endYear);
  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }

  return (
    <ul className="YearSelector">
      {years.map((year) => (
        <li key={year}>
          <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
        </li>
      ))}
    </ul>
  );
};
export default YearSelector;
