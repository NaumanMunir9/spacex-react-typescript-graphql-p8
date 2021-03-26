import gql from "graphql-tag";

export const QUERY_LAUNCH_DETAILS = gql`
  query LaunchInfo($id: String) {
    launch(id: $id) {
      flight_number
      mission_id
      mission_name
      launch_year
      launch_date_local
      is_tentative
      launch_success
      details
      upcoming
      rocket {
        rocket_name
        rocket_type
      }
      launch_site {
        site_name
      }
      links {
        video_link
        flickr_images
      }
    }
  }
`;
