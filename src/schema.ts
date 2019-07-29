import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType
} from 'graphql';
import { getEvents, addEvent } from './controllers';

const EventType = new GraphQLObjectType({
  name: 'EventType',
  description: 'The user event type',
  fields: () => ({
    title: {
      type: GraphQLString,
      description: 'The event title',
      resolve: source => source.title
    },
    description: {
      type: GraphQLString,
      description: 'The event description',
      resolve: source => source.description
    },
    start_date: {
      type: GraphQLString,
      description: 'The start date of the event',
      resolve: source => source.description
    },
    end_date: {
      type: GraphQLString,
      description: 'The end date of the event'
    },
    votes_per_contestants: {
      type: GraphQLString,
      description: 'Votes allowed per contestant'
    },
    event_type: {
      type: GraphQLString,
      description: 'The type of event'
    },
    category_id: {
      type: GraphQLID,
      description: 'The category id'
    },
    created_at: {
      type: GraphQLString,
      description: 'The date the event was created',
      resolve: source => source.created_at
    }
  })
});

const EventInput = new GraphQLInputObjectType({
  name: 'EventInput',
  description: 'The user event type',
  fields: () => ({
    title: {
      type: GraphQLString,
      description: 'The event title'
    },
    description: {
      type: GraphQLString,
      description: 'The event description'
    },
    start_date: {
      type: GraphQLString,
      description: 'The start date of the event'
    },
    end_date: {
      type: GraphQLString,
      description: 'The end date of the event'
    },
    votes_per_contestants: {
      type: GraphQLString,
      description: 'Votes allowed per contestant'
    },
    event_type: {
      type: GraphQLString,
      description: 'The type of event'
    },
    category_id: {
      type: GraphQLID,
      description: 'The category id'
    },
    created_at: {
      type: GraphQLString,
      description: 'The date the event was created'
    }
  })
});

const query = new GraphQLObjectType({
  name: 'PolleonQuery',
  description: 'Query Polleon database',
  fields: () => ({
    allEvents: {
      type: GraphQLList(EventType),
      description: 'Get all event types',
      resolve: () => getEvents()
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
      resolve: (_, args) => addEvent(args.inpute)
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
