let namesAndHobbies = {
  elie: "JavaScript",
  matt: "jogging",
  janey: "table building",
  tim: "sailing",
};

//Output should be:
for (let i = 0; i < Object.keys(namesAndHobbies).length; i++) {
  console.log(
    `${Object.values(namesAndHobbies)[i]} => ${Object.keys(namesAndHobbies)[i]}`
  );
}

// add key untuk nama dany
namesAndHobbies.dany = "bootcamp";
console.log(namesAndHobbies);

//jika key nama dany ada maka tampilkan nama dan hobby
if (namesAndHobbies.dany) {
  console.log(
    `${Object.keys(namesAndHobbies)[4]} hobinya ${namesAndHobbies.dany}`
  );
}
