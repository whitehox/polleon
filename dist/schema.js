"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const controllers_1 = require("./controllers");
const EventType = new graphql_1.GraphQLObjectType({
    name: 'EventType',
    description: 'Get all event types',
    fields: () => ({
        id: {
            type: graphql_1.GraphQLID,
            description: 'The events ID',
            resolve: source => source.id
        },
        title: {
            type: graphql_1.GraphQLString,
            description: 'The events title',
            resolve: source => source.title
        }
    })
});
const query = new graphql_1.GraphQLObjectType({
    name: 'EventQuery',
    description: 'Get all events',
    fields: () => ({
        allContacts: {
            type: new graphql_1.GraphQLList(EventType),
            description: 'All events type',
            resolve: () => controllers_1.getAllEvents()
        }
    })
});
const schema = new graphql_1.GraphQLSchema({
    query
});
exports.default = schema;
//# sourceMappingURL=schema.js.map