import React from "react";
import { LaunchesQuery } from "../../generated/graphql";
import "./styles.scss";

export interface LaunchesProps {
  data: LaunchesQuery;
}

const Launches: React.FC<LaunchesProps> = ({ data }) => {
  return (
    <div className="launches-container">
      <h2>All SpaceX Launches</h2>

      <ol className="launches-list">
        {!!data.launches &&
          data.launches.map((launch, index) => {
            return (
              !!launch && (
                <li key={index} className="launches-list-item">
                  <h4 className="title">Mission Name: {launch.mission_name}</h4>
                  <p className="spec">Flight Number: {launch.flight_number}</p>
                  <p className="spec">Year of Launch: {launch.launch_year}</p>
                  <p className="spec">
                    Local Date of Launch: {launch.launch_date_local}
                  </p>
                  <p className="spec">
                    Launch Success:{" "}
                    {launch.launch_success ? (
                      <span>Success</span>
                    ) : (
                      <span>Failure</span>
                    )}
                  </p>
                  <p className="spec">Launch Details: {launch.details}.</p>
                  <p className="spec">
                    Tentative Launch:{" "}
                    {launch.is_tentative ? <span>Yes</span> : <span>No</span>}
                  </p>
                  <p className="spec">
                    Upcoming Launch:{" "}
                    {launch.upcoming ? <span>Yes</span> : <span>No</span>}
                  </p>
                </li>
              )
            );
          })}
      </ol>
    </div>
  );
};

export default Launches;
