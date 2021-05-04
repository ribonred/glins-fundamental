let namesAndHobbies = {
  elie: "JavaScript",
  matt: "jogging",
  janey: "table building",
  tim: "sailing",
};

namesAndHobbies.dian = "cycling";

const checkMyName = () => {
  if (namesAndHobbies.hasOwnProperty("dian")) {
    console.log("Dian termasuk dalam object");
  }
  for (let key in namesAndHobbies) {
    console.log(namesAndHobbies[key], "=>", key);
  }
};

checkMyName();
