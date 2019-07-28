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
        },
        description: {
            type: graphql_1.GraphQLString,
            description: 'The event description',
            resolve: source => source.description
        },
        category: {
            type: graphql_1.GraphQLString,
            description: 'The event category',
            resolve: source => source.category
        }
    })
});
const UserTypes = new graphql_1.GraphQLObjectType({
    name: 'UserType',
    description: 'The user type',
    fields: () => ({
        firstname: {
            type: graphql_1.GraphQLString,
            description: 'The users firstname'
        },
        lastname: {
            type: graphql_1.GraphQLString,
            description: 'The user lastname'
        },
        username: {
            type: graphql_1.GraphQLString,
            description: 'The users username'
        },
        email: {
            type: graphql_1.GraphQLString,
            description: 'The users email address'
        },
        password: {
            type: graphql_1.GraphQLString,
            description: 'The users description'
        },
        profilePicture: {
            type: graphql_1.GraphQLString,
            description: 'The users profile Picture'
        }
    })
});
const UserInput = new graphql_1.GraphQLInputObjectType({
    name: 'UserInput',
    description: 'The user type',
    fields: () => ({
        firstname: {
            type: graphql_1.GraphQLString,
            description: 'The users firstname'
        },
        lastname: {
            type: graphql_1.GraphQLString,
            description: 'The user lastname'
        },
        username: {
            type: graphql_1.GraphQLString,
            description: 'The users username'
        },
        email: {
            type: graphql_1.GraphQLString,
            description: 'The users email address'
        },
        password: {
            type: graphql_1.GraphQLString,
            description: 'The users description'
        },
        profilePicture: {
            type: graphql_1.GraphQLString,
            description: 'The users profile Picture'
        }
    })
});
const query = new graphql_1.GraphQLObjectType({
    name: 'EventQuery',
    description: 'Get all events',
    fields: () => ({
        allEvents: {
            type: new graphql_1.GraphQLList(EventType),
            description: 'All events type',
            resolve: () => controllers_1.getEvents()
        }
    })
});
const mutation = new graphql_1.GraphQLObjectType({
    name: 'CreateUser',
    description: 'Create a polleon user',
    fields: () => ({
        createUser: {
            type: UserTypes,
            description: 'Create a new user',
            args: {
                input: { type: UserInput, description: 'The users input' }
            },
            resolve: (_, args) => controllers_1.createUser(args.input)
        }
    })
});
const schema = new graphql_1.GraphQLSchema({
    query,
    mutation
});
exports.default = schema;
//# sourceMappingURL=schema.js.map