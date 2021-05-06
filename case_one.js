let people  = ["Greg", "Mary", "Devon", "James"] //  <= ini variabel
// variabel people  menyimpan array
// cara mengakses index di dalam array
// tanda [] ini untuk memanggil index nomor berapa contoh  people[0] sama dengan Greg

// console.log(people[0]);

// kita mau loop yang ada di variable tersebut

const cetakPerson = function(){
        for (var i=0;i < people.length;i++){ // i itu sama dengan nol, jika i kurang dari panjang index array, i akan bertambah
        console.log(people[i]); 
        }
}
//- Write the function to remove "Greg" from the array. 
//- Write the function to remove "James" from the array.
function removePerson(name){
        for (let i=0; i< people.length;i++){          
                if (people[i]===name){
                      let remove =  people.splice(i, 1)    
                }          
        } 
}
//- Write the function to add "Matt" to the front of the array.
function addPersonFront(name){
        people.unshift(name);
}
//- Write the function to add your name to the end of the array.
function addYourName(name){
        people.push(name);
}
//- Write the function Using a loop, iterate through this array and
// after console.log-ing "Mary", exit from the loop.
function loopExitByName(name){
        for (let i = 0; i < people.length; i++) {
        console.log(people[i]);
        if (people[i] == name) 
        break;
        }  
}
// - Write the function to make a copy of the array using slice. 
//The copy should NOT include "Mary" or "Matt".
function arrSlice(){
        const newArr = ["Greg", "Mary", "Devon", "James", "Matt"];
        console.log(newArr.slice(0, 4));
        
}
//Write the function that gives the indexOf where "Mary" is located.  
//- Write the function that gives the indexOf where "Foo" is located 
//(this should return -1).
function getIndex(name){
        console.log(people.indexOf(name));
}
//- Redefine the people variable with the value you started with. 
//Using the splice function, remove "Devon" from the array and add "Elizabeth" and "Artie". 
//Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
const newArr = people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);
              
//Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
const withBob = [...people, "Bob"];
console.log(withBob);

removePerson('Greg');
removePerson('James');
addPersonFront('Matt');
addYourName('Asdar');
loopExitByName('Mary');
arrSlice();
getIndex('Mary');
getIndex('foo');

//cetakPerson();





