"use strict";
/**
 * GraphQL event schema types
 */
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.EventType = new graphql_1.GraphQLObjectType({
    name: 'EventType',
    description: 'The user event type',
    fields: () => ({
        id: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: 'The unique identifier for this contact',
            resolve: source => source._id
        },
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
exports.EventInput = new graphql_1.GraphQLInputObjectType({
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
//# sourceMappingURL=events.js.map