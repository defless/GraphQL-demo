import { users, cities } from './data.js';

// The root provides a resolver function for each API endpoint
export const root = {
  getCity: ({id}) => {
    return cities[id];
  },
  user: ({id}) => {
    return users[id];
  },
  users: () => {
    return users;
  },
  health: () => {
    return 'Server is working';
  },
};
