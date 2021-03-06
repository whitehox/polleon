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
        },
        allUsers: {
            type: graphql_1.GraphQLList(users_1.UserType),
            description: 'Get all users',
            resolve: () => controllers_1.getUsers()
        },
        getSingleUser: {
            type: users_1.EmailType,
            description: 'Get a single user',
            args: { email: { type: users_1.EmailInput, description: 'The users email' } },
            resolve: (_, args) => controllers_1.getSingleUser(args.email)
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
            resolve: (_, args) => controllers_1.addEvent(args.input)
        },
        addUsers: {
            type: users_1.UserType,
            description: 'Add user',
            args: { input: { type: users_1.UserInput, description: 'The user information' } },
            resolve: (_, args) => controllers_1.addUser(args.input)
        },
        userLogin: {
            type: users_1.LoginType,
            description: 'User login',
            args: {
                input: { type: users_1.LoginInput, description: 'The login input type' }
            },
            resolve: async (_, args) => {
                const result = await controllers_1.loginUser({
                    email: args.input.email,
                    password: args.input.password
                });
                let message;
                if (result.isUser === true) {
                    message = result.token;
                }
                else {
                    message = 'Your email or password is incorrect';
                }
                return { message, email: args.input.email };
            }
        }
    })
});
const schema = new graphql_1.GraphQLSchema({
    query,
    mutation
});
exports.default = schema;
//# sourceMappingURL=schema.js.map