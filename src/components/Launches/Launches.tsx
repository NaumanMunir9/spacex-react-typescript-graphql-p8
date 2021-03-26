import React from "react";
import { LaunchesQuery } from "../../generated/graphql";
import "./styles.scss";

export interface LaunchesProps {
  data: LaunchesQuery;
}

const Launches: React.FC<LaunchesProps> = ({ data }) => {
  return (
    <div className="launches-container">
      <h2 className="main-title">All SpaceX Launches</h2>

      <ul className="launches-list">
        {!!data.launches &&
          data.launches.map((launch, index) => {
            return (
              !!launch && (
                <li key={index} className="launches-list-item">
                  <h4 className="title">
                    <span className="spec-item">Mission Name: </span>
                    {launch.mission_name}
                  </h4>
                  <p className="spec">
                    <span className="spec-item">Flight Number: </span>
                    {launch.flight_number}
                  </p>
                  <p className="spec">
                    <span className="spec-item">Year of Launch: </span>
                    {launch.launch_year}
                  </p>
                  <p className="spec">
                    <span className="spec-item">Local Date of Launch: </span>
                    {launch.launch_date_local}
                  </p>
                  <p className="spec">
                    <span className="spec-item">Launch Success: </span>
                    {launch.launch_success ? (
                      <span>Success</span>
                    ) : (
                      <span>Failure</span>
                    )}
                  </p>
                  <p className="spec">
                    <span className="spec-item">Launch Details: </span>
                    {launch.details}.
                  </p>
                  <p className="spec">
                    <span className="spec-item">Tentative Launch: </span>
                    {launch.is_tentative ? <span>Yes</span> : <span>No</span>}
                  </p>
                  <p className="spec">
                    <span className="spec-item">Upcoming Launch: </span>
                    {launch.upcoming ? <span>Yes</span> : <span>No</span>}
                  </p>
                </li>
              )
            );
          })}
      </ul>
    </div>
  );
};

export default Launches;
