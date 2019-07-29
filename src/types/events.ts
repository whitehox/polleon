/**
 * GraphQL event schema types
 */

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull
} from 'graphql';

export const EventType = new GraphQLObjectType({
  name: 'EventType',
  description: 'The user event type',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The unique identifier for this contact',
      resolve: source => source._id
    },
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

export const EventInput = new GraphQLInputObjectType({
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
