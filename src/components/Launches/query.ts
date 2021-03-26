import gql from "graphql-tag";

export const QUERY_LAUNCHES = gql`
  query launches {
    launches {
      flight_number
      mission_id
      mission_name
      launch_year
      launch_date_local
      is_tentative
      launch_success
      details
      upcoming
    }
  }
`;
