import React from "react";
import { LaunchInfoQuery } from "../../generated/graphql";
import "./styles.scss";

export interface LaunchDetailsProps {
  data: LaunchInfoQuery;
}

const LaunchDetails: React.FC<LaunchDetailsProps> = ({ data }) => {
  return (
    <div>
      <h1>LaunchDetails Components</h1>
    </div>
  );
};

export default LaunchDetails;
