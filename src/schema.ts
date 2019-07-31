import { GraphQLSchema, GraphQLObjectType, GraphQLList } from 'graphql';
import { EventType, EventInput } from './types/events';
import {
  getEvents,
  addEvent,
  addUser,
  getSingleUser,
  getUsers
} from './controllers';
import { UserType, UserInput, EmailType, EmailInput } from './types/users';

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
    }
  })
});

const schema = new GraphQLSchema({
  query,
  mutation
});

export default schema;
