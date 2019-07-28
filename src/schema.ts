import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType
} from 'graphql';
import { getEvents, createUser } from './controllers';

const EventType = new GraphQLObjectType({
  name: 'EventType',
  description: 'Get all event types',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'The events ID',
      resolve: source => source.id
    },
    title: {
      type: GraphQLString,
      description: 'The events title',
      resolve: source => source.title
    },
    description: {
      type: GraphQLString,
      description: 'The event description',
      resolve: source => source.description
    },
    category: {
      type: GraphQLString,
      description: 'The event category',
      resolve: source => source.category
    }
  })
});

const UserTypes = new GraphQLObjectType({
  name: 'UserType',
  description: 'The user type',
  fields: () => ({
    firstname: {
      type: GraphQLString,
      description: 'The users firstname'
    },
    lastname: {
      type: GraphQLString,
      description: 'The user lastname'
    },
    username: {
      type: GraphQLString,
      description: 'The users username'
    },
    email: {
      type: GraphQLString,
      description: 'The users email address'
    },
    password: {
      type: GraphQLString,
      description: 'The users description'
    },
    profilePicture: {
      type: GraphQLString,
      description: 'The users profile Picture'
    }
  })
});

const UserInput = new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'The user type',
  fields: () => ({
    firstname: {
      type: GraphQLString,
      description: 'The users firstname'
    },
    lastname: {
      type: GraphQLString,
      description: 'The user lastname'
    },
    username: {
      type: GraphQLString,
      description: 'The users username'
    },
    email: {
      type: GraphQLString,
      description: 'The users email address'
    },
    password: {
      type: GraphQLString,
      description: 'The users description'
    },
    profilePicture: {
      type: GraphQLString,
      description: 'The users profile Picture'
    }
  })
});

const query = new GraphQLObjectType({
  name: 'EventQuery',
  description: 'Get all events',
  fields: () => ({
    allEvents: {
      type: new GraphQLList(EventType),
      description: 'All events type',
      resolve: () => getEvents()
    }
  })
});

const mutation = new GraphQLObjectType({
  name: 'CreateUser',
  description: 'Create a polleon user',
  fields: () => ({
    createUser: {
      type: UserTypes,
      description: 'Create a new user',
      args: {
        input: { type: UserInput, description: 'The users input' }
      },
      resolve: (_, args) => createUser(args.input)
    }
  })
});

const schema = new GraphQLSchema({
  query
});

export default schema;
