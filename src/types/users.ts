/**
 * GraphQL user schema types
 */

import { GraphQLObjectType, GraphQLID, GraphQLBoolean } from 'graphql';
import { GraphQLString } from 'graphql';
import { GraphQLInputObjectType } from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';
import { getSingleUser } from '../controllers';

export const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'Users type',
  fields: () => ({
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
    isPolleon: {
      type: GraphQLString,
      description: 'The user account type'
    },
    created_at: {
      type: GraphQLDate,
      description: 'Date the account was created',
      resolve: () => new Date()
    }
  })
});

export const EmailType = new GraphQLObjectType({
  name: 'EmailType',
  description: 'The users email',
  fields: () => ({
    email: {
      type: GraphQLString,
      description: 'The users email',
      resolve: source => source.email
    },
    firstname: {
      type: GraphQLString,
      description: 'The users firstname',
      resolve: source => source.firstname
    },
    _id: {
      type: GraphQLID,
      description: 'The users ID',
      resolve: source => source._id
    }
  })
});

export const EmailInput = new GraphQLInputObjectType({
  name: 'EmailInput',
  description: 'The users email input',
  fields: () => ({
    email: {
      type: GraphQLString,
      description: 'The users email input'
    }
  })
});

export const UserInput = new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'Users type',
  fields: () => ({
    firstname: {
      type: GraphQLString,
      description: 'The users firstname'
    },
    lastname: {
      type: GraphQLString,
      description: 'The users lastname'
    },
    username: {
      type: GraphQLString,
      description: 'The username'
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
    isPolleon: {
      type: GraphQLBoolean,
      description: 'The user account type'
    },
    password: {
      type: GraphQLString,
      description: 'The users password'
    },
    created_at: {
      type: GraphQLDate,
      description: 'Date the account was created'
    }
  })
});

export const LoginType = new GraphQLObjectType({
  name: 'LoginType',
  description: 'The user Login type',
  fields: () => ({
    email: {
      type: GraphQLString,
      description: 'The user email address for login'
    },
    lastname: {
      type: GraphQLString,
      description: 'The users lastname'
    },
    username: {
      type: GraphQLString,
      description: 'The users username'
    },
    token: {
      type: GraphQLString,
      description: 'The authorized token',
      resolve: (parent, _args) => {
        return parent.message;
      }
    },
    authUser: {
      type: UserType,
      description: 'The authorized user',
      resolve: (parent, _args) => {
        return getSingleUser({ email: parent.email });
      }
    }
  })
});

export const LoginInput = new GraphQLInputObjectType({
  name: 'LoginInput',
  description: 'The user Login type',
  fields: () => ({
    email: {
      type: GraphQLString,
      description: 'The user email address for login'
    },
    password: {
      type: GraphQLString,
      description: 'The user password for login'
    }
  })
});
