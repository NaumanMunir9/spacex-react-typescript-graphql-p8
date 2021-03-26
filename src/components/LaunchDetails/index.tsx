import React from "react";
import { useLaunchInfoQuery } from "../../generated/graphql";
import LaunchDetails from "./LaunchDetails";

const LaunchDetailsContainer = () => {
  const { data, error, loading } = useLaunchInfoQuery({
    variables: { id: "13" },
  });

  if (loading) return <h3>Loading...</h3>;

  if (error) console.log(error);

  if (!data) return <p>Please select a mission for it's details</p>;

  return <LaunchDetails data={data} />;
};

export default LaunchDetailsContainer;
