import gql from "graphql-tag"; //graphql-tag는 프론트엔드에 graphql을 작성하는 방법

export const HOME_PAGE = gql`
  query {
    movies(limit: 50, rating: 8) {
      id
      title
      rating
      medium_cover_image
      genres
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      medium_cover_image
      title
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $movieId) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;
