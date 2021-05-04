


var hege = ["Cecilie", "Lone", "Linus", "totok"];
var stale = ["Emil", "Tobias", "Linus"];

function removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        return array.splice(0, index);
    } else {
        return new Array
    }
}


function arrayDiff(arrayA, arrayB) {

    for (var i = 0; i < arrayB.length; i++) {
        for (var j = 0; j < arrayA.length; j++) {
            if (arrayB[i] == arrayA[j]) {
                arrayA.splice(j, 1)
                j--
            }
        }
    }

    return arrayA
}


console.log(arrayDiff(hege, stale))