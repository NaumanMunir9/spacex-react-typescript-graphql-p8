import React from "react";
import { LaunchInfoQuery } from "../../generated/graphql";
import "./styles.scss";

export interface LaunchDetailsProps {
  data: LaunchInfoQuery;
}

const LaunchDetails: React.FC<LaunchDetailsProps> = ({ data }) => {
  if (!data.launch) return <div>Launch Unavailable</div>;

  const {
    flight_number,
    mission_name,
    details,
    rocket,
    launch_site,
  } = data.launch;

  return (
    <div className="launch-details">
      <div className="launch-details-item">
        <h4 className="title">
          <span className="spec-item">Mission Name: </span>
          {mission_name}
        </h4>
        <p className="spec">
          <span className="spec-item">Flight Number: </span>
          {flight_number}
        </p>
        <p className="spec">
          <span className="spec-item">Rocket Name: </span>
          {rocket?.rocket_name}
        </p>
        <p className="spec">
          <span className="spec-item">Launch Site: </span>
          {launch_site?.site_name}
        </p>
        <p className="spec">
          <span className="spec-item">Launch Details: </span>
          {details}.
        </p>
      </div>
    </div>
  );
};

export default LaunchDetails;
