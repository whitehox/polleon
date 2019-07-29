"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const controllers_1 = require("./controllers");
const EventType = new graphql_1.GraphQLObjectType({
    name: 'EventType',
    description: 'The user event type',
    fields: () => ({
        title: {
            type: graphql_1.GraphQLString,
            description: 'The event title',
            resolve: source => source.title
        },
        description: {
            type: graphql_1.GraphQLString,
            description: 'The event description',
            resolve: source => source.description
        },
        start_date: {
            type: graphql_1.GraphQLString,
            description: 'The start date of the event',
            resolve: source => source.description
        },
        end_date: {
            type: graphql_1.GraphQLString,
            description: 'The end date of the event'
        },
        votes_per_contestants: {
            type: graphql_1.GraphQLString,
            description: 'Votes allowed per contestant'
        },
        event_type: {
            type: graphql_1.GraphQLString,
            description: 'The type of event'
        },
        category_id: {
            type: graphql_1.GraphQLID,
            description: 'The category id'
        },
        created_at: {
            type: graphql_1.GraphQLString,
            description: 'The date the event was created',
            resolve: source => source.created_at
        }
    })
});
const EventInput = new graphql_1.GraphQLInputObjectType({
    name: 'EventInput',
    description: 'The user event type',
    fields: () => ({
        title: {
            type: graphql_1.GraphQLString,
            description: 'The event title'
        },
        description: {
            type: graphql_1.GraphQLString,
            description: 'The event description'
        },
        start_date: {
            type: graphql_1.GraphQLString,
            description: 'The start date of the event'
        },
        end_date: {
            type: graphql_1.GraphQLString,
            description: 'The end date of the event'
        },
        votes_per_contestants: {
            type: graphql_1.GraphQLString,
            description: 'Votes allowed per contestant'
        },
        event_type: {
            type: graphql_1.GraphQLString,
            description: 'The type of event'
        },
        category_id: {
            type: graphql_1.GraphQLID,
            description: 'The category id'
        },
        created_at: {
            type: graphql_1.GraphQLString,
            description: 'The date the event was created'
        }
    })
});
const query = new graphql_1.GraphQLObjectType({
    name: 'PolleonQuery',
    description: 'Query Polleon database',
    fields: () => ({
        allEvents: {
            type: graphql_1.GraphQLList(EventType),
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
            type: EventType,
            description: 'Add event',
            args: { input: { type: EventInput, description: 'Event input' } },
            resolve: (_, args) => controllers_1.addEvent(args.inpute)
        }
    })
});
const schema = new graphql_1.GraphQLSchema({
    query,
    mutation
});
exports.default = schema;
//# sourceMappingURL=schema.js.map