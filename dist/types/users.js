"use strict";
/**
 * GraphQL user schema types
 */
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const graphql_2 = require("graphql");
const graphql_3 = require("graphql");
exports.UserType = new graphql_1.GraphQLObjectType({
    name: 'UserType',
    description: 'Users type',
    fields: () => ({
        username: {
            type: graphql_2.GraphQLString,
            description: 'The username',
            resolve: source => source.username
        },
        firstname: {
            type: graphql_2.GraphQLString,
            description: 'The users firstname',
            resolve: source => source.firstname
        },
        lastname: {
            type: graphql_2.GraphQLString,
            description: 'The users lastname',
            resolve: source => source.lastname
        },
        company_name: {
            type: graphql_2.GraphQLString,
            description: 'The users company name'
        },
        profile_image: {
            type: graphql_2.GraphQLString,
            description: 'The users company name'
        },
        email: {
            type: graphql_2.GraphQLString,
            description: 'The users email address'
        },
        phone_number: {
            type: graphql_2.GraphQLString,
            description: 'The users phone number'
        },
        password: {
            type: graphql_2.GraphQLString,
            description: 'The users password'
        },
        account_type: {
            type: graphql_2.GraphQLString,
            description: 'The user account type'
        },
        created_at: {
            type: graphql_2.GraphQLString,
            description: 'Date the account was created'
        }
    })
});
exports.UserInput = new graphql_3.GraphQLInputObjectType({
    name: 'UserInput',
    description: 'Users type',
    fields: () => ({
        username: {
            type: graphql_2.GraphQLString,
            description: 'The username'
        },
        firstname: {
            type: graphql_2.GraphQLString,
            description: 'The users firstname'
        },
        lastname: {
            type: graphql_2.GraphQLString,
            description: 'The users lastname'
        },
        company_name: {
            type: graphql_2.GraphQLString,
            description: 'The users company name'
        },
        profile_image: {
            type: graphql_2.GraphQLString,
            description: 'The users company name'
        },
        email: {
            type: graphql_2.GraphQLString,
            description: 'The users email address'
        },
        phone_number: {
            type: graphql_2.GraphQLString,
            description: 'The users phone number'
        },
        password: {
            type: graphql_2.GraphQLString,
            description: 'The users password'
        },
        created_at: {
            type: graphql_2.GraphQLString,
            description: 'Date the account was created'
        }
    })
});
//# sourceMappingURL=users.js.map