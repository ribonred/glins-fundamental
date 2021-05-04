const intro = {
  firstName: "Dian",
  lastName: "Wijaya",
  occupation: "singer",
};

console.log(intro["firstName"], "// Print menggunakan bracket notaion");
console.log(intro.lastName, "Print menggunakan dot notaion");

delete intro.occupation;

console.log(intro);

intro.hobby = "bersepeda";
console.log(intro);
