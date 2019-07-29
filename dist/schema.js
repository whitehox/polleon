"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const events_1 = require("./types/events");
const controllers_1 = require("./controllers");
const users_1 = require("./types/users");
const query = new graphql_1.GraphQLObjectType({
    name: 'PolleonQuery',
    description: 'Query Polleon database',
    fields: () => ({
        allEvents: {
            type: graphql_1.GraphQLList(events_1.EventType),
            description: 'Get all event types',
            resolve: () => controllers_1.getEvents()
        }
    })
});
const mutation = new graphql_1.GraphQLObjectType({
    name: 'PolleonMutation',
    description: 'Mutate polleon database',
    fields: () => ({
        addEvents: {
            type: events_1.EventType,
            description: 'Add event',
            args: { input: { type: events_1.EventInput, description: 'Event input' } },
            resolve: (_, args) => controllers_1.addEvent(args.inpute)
        },
        addUsers: {
            type: users_1.UserType,
            description: 'Add user',
            args: { input: { type: users_1.UserInput, description: 'The user information' } },
            resolve: (_, args) => controllers_1.addUser(args.input)
        }
    })
});
const schema = new graphql_1.GraphQLSchema({
    query,
    mutation
});
exports.default = schema;
//# sourceMappingURL=schema.js.map