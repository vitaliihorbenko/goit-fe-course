import users from "./users.js";
console.log(users);

const getSortedUniqueSkills = (users) =>
  users
    .reduce((allSkills, el) => {
      allSkills.push(...el.skills);
      return allSkills;
    }, [])
    .reduce((uniqSkills, el) => {
      if (!uniqSkills.includes(el)) {
        uniqSkills.push(el);
      }
      return uniqSkills;
    }, [])
    .sort();

console.log(getSortedUniqueSkills(users)); // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
