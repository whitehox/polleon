/**
 * GraphQL user schema types
 */

import { GraphQLObjectType, GraphQLID } from 'graphql';
import { GraphQLString } from 'graphql';
import { GraphQLInputObjectType } from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'Users type',
  fields: () => ({
    username: {
      type: GraphQLString,
      description: 'The username',
      resolve: source => source.username
    },
    firstname: {
      type: GraphQLString,
      description: 'The users firstname',
      resolve: source => source.firstname
    },
    lastname: {
      type: GraphQLString,
      description: 'The users lastname',
      resolve: source => source.lastname
    },
    username: {
      type: GraphQLString,
      description: 'The username',
      resolve: source => source.username
    },
    company_name: {
      type: GraphQLString,
      description: 'The users company name'
    },
    profile_image: {
      type: GraphQLString,
      description: 'The users company name'
    },
    email: {
      type: GraphQLString,
      description: 'The users email address'
    },
    phone_number: {
      type: GraphQLString,
      description: 'The users phone number'
    },
    password: {
      type: GraphQLString,
      description: 'The users password'
    },
    account_type: {
      type: GraphQLString,
      description: 'The user account type'
    },
    created_at: {
      type: GraphQLString,
      description: 'Date the account was created'
    }
  })
});

export const UserInput = new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'Users type',
  fields: () => ({
    username: {
      type: GraphQLString,
      description: 'The username'
    },
    firstname: {
      type: GraphQLString,
      description: 'The users firstname'
    },
    lastname: {
      type: GraphQLString,
      description: 'The users lastname'
    },
    company_name: {
      type: GraphQLString,
      description: 'The users company name'
    },
    profile_image: {
      type: GraphQLString,
      description: 'The users company name'
    },
    email: {
      type: GraphQLString,
      description: 'The users email address'
    },
    phone_number: {
      type: GraphQLString,
      description: 'The users phone number'
    },
    password: {
      type: GraphQLString,
      description: 'The users password'
    },
    created_at: {
      type: GraphQLString,
      description: 'Date the account was created'
    }
  })
});
