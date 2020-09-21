const { gql } = require('apollo-server-express');
require('events').EventEmitter.defaultMaxListeners = 25

module.exports = gql(`

    type UserRoles
        {
        _id: ID!
            slug: String!
            name: String!
    }
        type Users {
    _id: ID!
            displayName: String!
            emailAddress: String!
            password: String!
            userRole: UserRoles
}

        
    input UserInput {
    slug: String!
        name: String!
}
    input updateUserrole
    {
        _id: ID!
        slug: String!
        name: String!
    }
    
    type Query {
    userroles: [UserRoles!]!
        allusers: [Users!]!
}

input UsersInput {
        displayName: String
        emailAddress: String
        password: String
}

    type Mutation {
    createUserRoles(input: UserInput): [UserRoles!]!
        updateUserRoles(input: updateUserrole): [UserRoles!]!
        deleteUserRoles(_id: ID): [UserRoles!]!
        createUser(input: UsersInput): [Users!]!
        deleteUser(_id : ID) : [Users!]!
        updateUser(_id : ID) : [Users!]!

}

    `)