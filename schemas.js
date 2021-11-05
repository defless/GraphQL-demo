import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language
export const schema = buildSchema(`
  type User {
    id: ID
    name: String
    age: Int
    friends: [User]
  }

  type Query {
    users: [User]
    user(id: Int): User
    health: String
    variableName: Boolean
  }
`);
