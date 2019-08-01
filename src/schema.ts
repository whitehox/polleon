import { GraphQLSchema, GraphQLObjectType, GraphQLList } from 'graphql';
import { EventType, EventInput } from './types/events';
import {
  getEvents,
  addEvent,
  addUser,
  getSingleUser,
  getUsers,
  loginUser
} from './controllers';
import {
  UserType,
  UserInput,
  EmailType,
  EmailInput,
  LoginType,
  LoginInput
} from './types/users';

import jwt from 'jsonwebtoken';

const query = new GraphQLObjectType({
  name: 'PolleonQuery',
  description: 'Query Polleon database',
  fields: () => ({
    allEvents: {
      type: GraphQLList(EventType),
      description: 'Get all event types',
      resolve: () => getEvents()
    },
    allUsers: {
      type: GraphQLList(UserType),
      description: 'Get all users',
      resolve: () => getUsers()
    },
    getSingleUser: {
      type: EmailType,
      description: 'Get a single user',
      args: { email: { type: EmailInput, description: 'The users email' } },
      resolve: (_, args) => getSingleUser(args.email)
    }
  })
});

const mutation = new GraphQLObjectType({
  name: 'PolleonMutation',
  description: 'Mutate polleon database',
  fields: () => ({
    addEvents: {
      type: EventType,
      description: 'Add event',
      args: { input: { type: EventInput, description: 'Event input' } },
      resolve: (_, args) => addEvent(args.input)
    },
    addUsers: {
      type: UserType,
      description: 'Add user',
      args: { input: { type: UserInput, description: 'The user information' } },
      resolve: (_, args) => addUser(args.input)
    },
    userLogin: {
      type: LoginType,
      description: 'User login',
      args: {
        input: { type: LoginInput, description: 'The login input type' }
      },
      resolve: async (_, args) => {
        const result = await loginUser({
          email: args.input.email,
          password: args.input.password
        });
        let message;
        if (result.isUser === true) {
          message = result.token;
        } else {
          message = 'Your email or password is incorrect';
        }
        return { message, email: args.input.email };
      }
    }
  })
});

const schema = new GraphQLSchema({
  query,
  mutation
});

export default schema;
