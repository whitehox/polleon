import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString
} from "graphql";
import { getEvents } from "./controllers";

const EventType = new GraphQLObjectType({
  name: "EventType",
  description: "The user event type",
  fields: () => ({
    title: {
      type: GraphQLString,
      description: "The event title",
      resolve: source => source.title
    },
    description: {
      type: GraphQLString,
      description: "The event description",
      resolve: source => source.description
    }
  })
});

const query = new GraphQLObjectType({
  name: "PolleonQuery",
  description: "Query Polleon database",
  fields: () => ({
    allEvents: {
      type: GraphQLList(EventType),
      description: "Get all event types",
      resolve: () => getEvents()
    }
  })
});

export default new GraphQLSchema({
  query
});
