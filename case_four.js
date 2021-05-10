let namesAndHobbies = {
    'elie': "JavaScript",
    'matt': "jogging",
    'janey': "table building",
    'tim': "sailing"
}
for (let i=0; i<Object.keys(namesAndHobbies).length;i++){
    console.log(`${Object.values(namesAndHobbies)[i]} => ${Object.keys(namesAndHobbies)[i]}`);
        
}

namesAndHobbies.nico = "jalan-jalan";
console.log(namesAndHobbies);
if (namesAndHobbies.nico) {
    console.log(`${Object.keys(namesAndHobbies)[4]} ${namesAndHobbies.nico} `);

}

// module.exports ={
//     namesAndHobbies
// }
 
// Given the following object below, write code to print the value then the key to the console separated by '=>':

// let namesAndHobbies = { elie: "JavaScript", matt: "jogging", janey: "table building", tim: "sailing" }

// Output should be:
// JavaScript => elie
// jogging => matt
// table building => janey
// sailing => tim Add a key for your name, and a value for your favorite hobby to the namesAndHobbies object.
// Write an if statement that console.logs your name and hobby to the console if the key of your name is contained in the object.