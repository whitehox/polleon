import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from 'graphql';
import { getAllEvents } from './controllers';

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
    }
  })
});

const query = new GraphQLObjectType({
  name: 'EventQuery',
  description: 'Get all events',
  fields: () => ({
    allContacts: {
      type: new GraphQLList(EventType),
      description: 'All events type',
      resolve: () => getAllEvents()
    }
  })
});

const schema = new GraphQLSchema({
  query
});

export default schema;
