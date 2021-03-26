import React from "react";
import { LaunchesQuery } from "../../generated/graphql";
import "./styles.scss";

export interface LaunchesProps {
  data: LaunchesQuery;
}

const Launches: React.FC<LaunchesProps> = ({ data }) => {
  return (
    <div>
      <h1>LaunchesComponent</h1>
    </div>
  );
};

export default Launches;
