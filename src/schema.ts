import { GraphQLSchema, GraphQLObjectType, GraphQLList } from "graphql";
import { EventType, EventInput } from "./types/events";
import { getEvents, addEvent, addUser } from "./controllers";
import { UserType, UserInput } from "./types/users";

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

const mutation = new GraphQLObjectType({
  name: "PolleonMutation",
  description: "Mutate polleon database",
  fields: () => ({
    addEvents: {
      type: EventType,
      description: "Add event",
      args: { input: { type: EventInput, description: "Event input" } },
      resolve: (_, args) => addEvent(args.inpute)
    },
    addUsers: {
      type: UserType,
      description: "Add user",
      args: { input: { type: UserInput, description: "The user information" } },
      resolve: (_, args) => addUser(args.input)
    }
  })
});

const schema = new GraphQLSchema({
  query,
  mutation
});

export default schema;
