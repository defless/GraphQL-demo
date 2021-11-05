# GraphQL-demo 

A GraphQL demo for technological watch.  

Install dependencies
```bash
yarn install
```

Start the server
```bash
yarn start
```

then go to http://localhost:4000/graphql


You can now try your very first GraphQL query : 
```
{
  users {
    name
    age
  }
}
```
it allows to get all the users and their name & age. 

**Get all the informations with one request**:
<br>
To get all the users informations and their subsequent fields you can do so:
```
{
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

*The way you write the query is the way you get the data*

Let's assume now that you want the data of only one specific user with the the id `0`

```
{
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
