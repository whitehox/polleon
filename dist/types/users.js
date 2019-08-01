"use strict";
/**
 * GraphQL user schema types
 */
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const graphql_2 = require("graphql");
const graphql_3 = require("graphql");
const controllers_1 = require("../controllers");
exports.UserType = new graphql_1.GraphQLObjectType({
    name: 'UserType',
    description: 'Users type',
    fields: () => ({
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
        username: {
            type: graphql_2.GraphQLString,
            description: 'The username',
            resolve: source => source.username
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
exports.EmailType = new graphql_1.GraphQLObjectType({
    name: 'EmailType',
    description: 'The users email',
    fields: () => ({
        email: {
            type: graphql_2.GraphQLString,
            description: 'The users email',
            resolve: source => source.email
        },
        firstname: {
            type: graphql_2.GraphQLString,
            description: 'The users firstname',
            resolve: source => source.firstname
        },
        _id: {
            type: graphql_1.GraphQLID,
            description: 'The users ID',
            resolve: source => source._id
        }
    })
});
exports.EmailInput = new graphql_3.GraphQLInputObjectType({
    name: 'EmailInput',
    description: 'The users email input',
    fields: () => ({
        email: {
            type: graphql_2.GraphQLString,
            description: 'The users email input'
        }
    })
});
exports.UserInput = new graphql_3.GraphQLInputObjectType({
    name: 'UserInput',
    description: 'Users type',
    fields: () => ({
        firstname: {
            type: graphql_2.GraphQLString,
            description: 'The users firstname'
        },
        lastname: {
            type: graphql_2.GraphQLString,
            description: 'The users lastname'
        },
        username: {
            type: graphql_2.GraphQLString,
            description: 'The username'
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
exports.LoginType = new graphql_1.GraphQLObjectType({
    name: 'LoginType',
    description: 'The user Login type',
    fields: () => ({
        email: {
            type: graphql_2.GraphQLString,
            description: 'The user email address for login'
        },
        lastname: {
            type: graphql_2.GraphQLString,
            description: 'The users lastname'
        },
        username: {
            type: graphql_2.GraphQLString,
            description: 'The users username'
        },
        token: {
            type: graphql_2.GraphQLString,
            description: 'The authorized token',
            resolve: (parent, _args) => {
                return parent.message;
            }
        },
        authUser: {
            type: exports.UserType,
            description: 'The authorized user',
            resolve: (parent, _args) => {
                return controllers_1.getSingleUser({ email: parent.email });
            }
        }
    })
});
exports.LoginInput = new graphql_3.GraphQLInputObjectType({
    name: 'LoginInput',
    description: 'The user Login type',
    fields: () => ({
        email: {
            type: graphql_2.GraphQLString,
            description: 'The user email address for login'
        },
        password: {
            type: graphql_2.GraphQLString,
            description: 'The user password for login'
        }
    })
});
//# sourceMappingURL=users.js.map