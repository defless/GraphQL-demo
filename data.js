//Data of our API
export const cities = [
  {id:0,name:'Albi',code:81000}
];

export const users = [
  {
    id: 0,
    name: 'Hugo',
    age: 16,
    friends: [
      { name: 'Simon' },
      { name: 'David' },
    ],
    address: {
      city: {
        name: 'Lyon',
        code: 69002,
        inhabitants: 68877382,
      },
      street: '4 avenue de webpack'
    }
  },
  {
    id: 1,
    name: 'Simon',
    age: 12,
    friends: [{ name: 'David' }, { name: 'Hugo' }],
    address: {
      city: {
        name: 'Albi',
        code: 81000,
        inhabitants: 12123,
      },
      street: '10 rue de eslint'
    }
  },
  {
    id: 2,
    name: 'Albert',
    age: 13,
    friends: [{ name: 'Hakim' }],
    address: {
      city: {
        name: 'Toulouse',
        code: 31000,
        inhabitants: 127123123,
      },
      street: '10 rue de nodeJs'
    }
  },
  {
    id: 3,
    name: 'David',
    age: 15,
    friends: [{ name: 'Simon' }, { name: 'Hugo' }],
    address: {
      city: {
        name: 'Bordeaux',
        code: 33000,
        inhabitants: 123132,
      },
      street: '13 rue de babel'
    }
  },
  {
    id: 4,
    name: 'Hakim',
    age: 19,
    friends: [{ name: 'Albert' }],
    address: {
      city: {
        name: 'Paris',
        code: 75002,
        inhabitants: 1223423132,
      },
      street: '13 cours eslint'
    }
  },
];
