import users from "./users.js";
console.log(users);

const getInactiveUsers = users => {
    return users.filter((el) => el.isActive === false);
  };
  
  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]