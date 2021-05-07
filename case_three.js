let object = {firstName:"Asdar", lastName:"Palari", occupation:"Student"};

console.log(object.firstName);
console.log(object.lastName);
console.log(object.occupation);
console.log(object['firstName']);
console.log(object['lastName']);
console.log(object['occupation']);
delete object.occupation;
object.hobby = 'Mancing';
console.log(object);


