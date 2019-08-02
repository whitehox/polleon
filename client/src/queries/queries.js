import { gql } from 'apollo-boost';

export const REGISTER = gql`
  mutation addUser(
    $firstname: String!
    $lastname: String!
    $username: String!
    $email: String!
    $account_type: Boolean!
    $password: String!
    $created_at: String!
  ) {
    addUsers(
      input: {
        firstname: $firstname
        lastname: $lastname
        username: $username
        email: $email
        account_type: $account_type
        password: $password
        created_at: $created_at
      }
    ) {
      firstname
      lastname
      username
      email
      account_type
      password
      created_at
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
