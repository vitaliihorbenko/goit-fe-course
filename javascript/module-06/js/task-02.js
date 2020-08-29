import users from "./users.js";
console.log(users);

const getUsersWithEyeColor = (users, color) => {
  return users.filter((el) => el.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
