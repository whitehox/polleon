import { gql } from 'apollo-boost';

export const REGISTER = gql`
  mutation addUser(
    $firstname: String!
    $lastname: String!
    $username: String!
    $email: String!
    $isPolleon: Boolean!
    $password: String!
  ) {
    addUsers(
      input: {
        firstname: $firstname
        lastname: $lastname
        username: $username
        email: $email
        isPolleon: $isPolleon
        password: $password
      }
    ) {
      firstname
      lastname
      username
      email
      isPolleon
      password
    }
  }
`;

export const LOGIN = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(input: { email: $email, password: $password }) {
      token
      email
      authUser {
        username
        email
        lastname
        firstname
      }
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
