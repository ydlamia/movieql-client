import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000" //추후에 graphql API에 도메인을 준다면 여기도 수정해줘야 apollo가 찾을 수 있음
});

export default client;
