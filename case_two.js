// var hege = ["Cecilie", "Lone","Linus","totok"];
// var stale = ["Emil", "Tobias", "Linus"];

// function removeElement(array, elem) {
//     var index = array.indexOf(elem);
//     if (index > -1) {
//         return array.splice(0,index);
//     }else{
//         return new Array
//     }
// }

// function arrayDiff(arrayA, ArrayB) {
//     for(var i=0;i<ArrayB.length;i++){
//        var result = removeElement(arrayA,ArrayB[i])
//       if(result.length > 0){
//           return result
//       }
//     }

//     }

// console.log(arrayDiff(hege,stale))

arrayDiff([1, 2], [1]) == [2];
arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3];

function arrayDiff(a, b) {
  let output = [];
  for (let i = 0; i < a.length; i++) {
    if (b.every((elem) => a[i] != elem)) output.push(a[i]);
  }
  for (let i = 0; i < b.length; i++) {
    if (a.every((elem) => b[i] == elem)) return output;
  }
  return output;
}

console.log(arrayDiff([], [4, 5])); // expected []
console.log(arrayDiff([3, 4], [3])); // expected [4]
console.log(arrayDiff([1, 8, 2], [])); // expected [1,8,2]
console.log(arrayDiff([12, 10, -11, 7, 6, -1, -15, -17, -18, 20, -5, 9, 10], [6, 20, 10, -17, -18, 10, 7])); // expected [12, -11, -1, -15, -5, 9]
console.log(arrayDiff([3, -7, 19, 5, 5, 10, 0, 4, -5], [-5, 5, 5, 0, 4, 19, 10])); // expected [3, -7]
console.log(arrayDiff([-17, -17, -16, -10, -17], [-10, -17, -17, -17, -16])); // expected []
