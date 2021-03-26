import React from "react";
import { useLaunchesQuery } from "../../generated/graphql";
import Launches from "./Launches";

const LaunchesContainer = () => {
  const { data, error, loading } = useLaunchesQuery();

  if (loading) return <h3>Loading...</h3>;

  if (error) console.log(error);

  if (!data) return <div>Data Unavailable</div>;

  return <Launches data={data} />;
};

export default LaunchesContainer;
