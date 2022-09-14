const { gql } = require('apollo-server-express')
const typeDefs = gql`
  type User {
    id: String!
    username: String
    email: String!
  }
  type AuthPayload {
    token: String!
    user: User!
  }
  type Query {
    user(id: String!): User
    allUsers: [User!]!
  
  }
  type Mutation {
    registerUser(username: String, email: String!, password: String!): AuthPayload!
    login (email: String!, password: String!): AuthPayload!
  }
`
module.exports = typeDefs