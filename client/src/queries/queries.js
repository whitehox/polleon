import { gql } from 'apollo-boost';

export const REGISTER = gql`
  mutation addUser(
    $firstname: String!
    $lastname: String!
    $username: String!
    $email: String!
    $password: String!
    $created_at: String!
  ) {
    addUsers(
      input: {
        firstname: $firstname
        lastname: $lastname
        username: $username
        email: $email
        password: $password
        created_at: $created_at
      }
    ) {
      firstname
      lastname
      username
      email
      password
      created_at
    }
  }
`;

export const getUser = gql`
  {
    allUsers {
      lastname
    }
  }
`;
