import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_SANITY_GRAPHQL_URL ,
  cache: new InMemoryCache()
});

export{client}