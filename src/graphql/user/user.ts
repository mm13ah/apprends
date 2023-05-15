import gql from 'graphql-tag';

export const login = gql`
  query Query {
    me {
      firstname
      lastname
    }
  }
`;
