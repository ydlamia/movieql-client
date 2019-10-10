import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
import Movie from "./Movie";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
`;

const Home = () => (
  <Container>
    <Query query={HOME_PAGE}>
      {({ loading, data, error }) => {
        if (loading) return "loading";
        if (error) return "something happened";
        if (data) {
          console.log(data);
          return data.movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rating={movie.rating}
              poster={movie.medium_cover_image}
            />
          ));
        }
      }}
    </Query>
  </Container>
);

export default Home;
