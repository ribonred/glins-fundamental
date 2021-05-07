const hege = ["Cecilie","Cecilie", "Lone","Linus","Linus","totok","Budi","Susan","Susan","Susan","Budi","Iman","Raka","Linus"];
const stale = ["Emil", "Tobias", "Linus","Budi","Iman","Susan"];

function cekDiff(array1,array2){
   // let res=[];
    for (let i=0; i<array1.length;i++){
        for (let j=0; j<array2.length;j++){
           // console.log(array1[i],array2[j]);
            if (array1[i]===array2[j]){  
                array1.splice(i,1,''); 
              // console.log(array1);
              // console.log(array1.filter(xxx => xxx !== array2[j]));
              // res.push(array[i])
               //res = [...res, array[i]];  
        }
        }
    }
  // console.log(array1);
  //console.log(array1.filter(xx => xx !==''));
   result = [...new Set(array1)];
  // console.log(result);
   result=(result.filter(xx =>xx !==''));
   console.log(result);
}

cekDiff(hege,stale);


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
   

// console.log(arrayDiff(hege,stale));