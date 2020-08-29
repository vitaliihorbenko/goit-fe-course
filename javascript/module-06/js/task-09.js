import users from "./users.js";
console.log(users);

const getNamesSortedByFriendsCount = (users) => {
  return users.sort((a, b) => a.friends.length - b.friends.length).map(el => el.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
