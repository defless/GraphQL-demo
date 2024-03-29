# GraphQL-demo 📊

>The way you write the query is the way you get the data

A [GraphQL](https://graphql.org/) demo for technological watch.  

Install dependencies
```bash
yarn install
```

Start the server
```bash
yarn start
```

then go to http://localhost:4000/graphql

#### GraphQL logic items:
GraphQL schema
```
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
```

GraphQL resolver</br>
```js
const root = {
   user: ({id}) => {
      return users[id];
   },
   users: () => {
      return users;
   },
}
```

**Get all the informations in one request with query**:
</br>
You can now try your very first GraphQL query : 
```
query{
  users {
    name
    age
  }
}
```
it allows to get all the users and their name & age. 
</br>
To get all the users informations and their subsequent fields you can do so:
```
query{
  users {
    name
    age
    address {
      city {
        name
        code
        inhabitants
      }
      street
    }
  }
}
```

Let's assume now that you want the data of only one specific user with the the id `0`

```
query{
  user(id: 0) {
    name
    age
    address {
      city {
        name
        code
        inhabitants
      }
      street
    }
  }
}
```

here you can see that the user resolver is different from the users one. They do a different job but still on the same API endpoint. 
This way, we could also get the cities with the corresponding resolver. 


**Post informations with mutation**:

```
mutation{
  newUser(name: "Name", age: 45) {
    id
    name
    age
  }
}
```

It calls the resolver 'newUser', add the user to our list and then return this user to the specified format.
