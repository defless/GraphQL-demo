import pkg from 'graphql';
const { buildSchema } = pkg;

// Construct a schema, using GraphQL schema language
export const schema = buildSchema(`

  type City {
    name: String
    inhabitants: Int
    code: Int
  }

  type Address {
    street: String
    city: City
  }

  type User {
    id: ID
    name: String
    age: Int
    friends: [User]
    address: Address
  }

  type Query {
    users: [User]
    user(id: Int): User
  }
`);
