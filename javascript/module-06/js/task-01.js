import users from "./users.js";
console.log(users);

const getUserNames = (users) => {
  return users.map((user) => user.name);
};

// const getUserNames = users.map((user) => user.name);
// console.log("map:", getUserNames);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
