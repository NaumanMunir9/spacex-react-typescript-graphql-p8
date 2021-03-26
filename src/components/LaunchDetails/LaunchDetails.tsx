import React from "react";
import { LaunchInfoQuery } from "../../generated/graphql";
import "./styles.scss";

export interface LaunchDetailsProps {
  data: LaunchInfoQuery;
}

const LaunchDetails: React.FC<LaunchDetailsProps> = ({ data }) => {
  if (!data.launch) return <div>Launch Unavailable</div>;

  return (
    <div className="launch-details">
      <div className="launch-details-status">
        <span>Flight {data.launch.flight_number}</span>
      </div>

      <h2>
        {data.launch.mission_name} - {data.launch.rocket?.rocket_name}
      </h2>

      <p>{data.launch.launch_site?.site_name}</p>
      <p>{data.launch.details}</p>
    </div>
  );
};

export default LaunchDetails;
