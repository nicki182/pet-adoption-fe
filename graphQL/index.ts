import { ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: `${process.env.API_HOST}/graphql`,
  cache: new InMemoryCache({ addTypename: false }),
});
export default client;
