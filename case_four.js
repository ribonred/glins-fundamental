let namesAndHobbies = {
    elie : "JavaScript",
    matt : "jogging",
    janey: "table building",
    tim : "sailing"
}

for (const [key, value] of Object.entries(namesAndHobbies)) {
    console.log(`${key} => ${value}`);
  }
  
namesAndHobbies["asdar"]= "fishing";

// Write an if statement that console.logs your name and hobby to 
//the console if the key of your name is contained in the object.

function test(name1){
    for (const [name, hobby] of Object.entries(namesAndHobbies)) {
        if (name1===name){
            console.log(`My Name is ${name} and my hobby is ${hobby}`);
        }
      }  
}

test('asdar');

// export {namesAndHobbies}

// module.exports ={
//     namesAndHobbies
// }
 