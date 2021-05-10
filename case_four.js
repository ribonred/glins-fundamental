let namesAndHobbies = {
  elie: "JavaScript",
  matt: "jogging",
  janey: "table building",
  tim: "sailing",
};

// export { namesAndHobbies };

// module.exports ={
//     namesAndHobbies
// }

for (let key in namesAndHobbies) {
  console.log(`${namesAndHobbies[key]} => ${key}`);
}

namesAndHobbies.fajar = "read";

if ("fajar" in namesAndHobbies) {
  console.log("Fajar", namesAndHobbies.fajar);
}
