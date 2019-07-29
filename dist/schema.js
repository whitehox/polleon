"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const controllers_1 = require("./controllers");
const EventType = new graphql_1.GraphQLObjectType({
    name: "EventType",
    description: "The user event type",
    fields: () => ({
        title: {
            type: graphql_1.GraphQLString,
            description: "The event title",
            resolve: source => source.title
        },
        description: {
            type: graphql_1.GraphQLString,
            description: "The event description",
            resolve: source => source.description
        }
    })
});
const query = new graphql_1.GraphQLObjectType({
    name: "PolleonQuery",
    description: "Query Polleon database",
    fields: () => ({
        allEvents: {
            type: graphql_1.GraphQLList(EventType),
            description: "Get all event types",
            resolve: () => controllers_1.getEvents()
        }
    })
});
exports.default = new graphql_1.GraphQLSchema({
    query
});
//# sourceMappingURL=schema.js.map