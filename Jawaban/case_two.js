
// yang di hapus = linus doang

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


function arrayDiff(arrayA, ArrayB) {
    for (var i = 0; i < ArrayB.length; i++) {
        var result = removeElement(arrayA, ArrayB[i])
        if (result.length > 0) {
            return result
        }
    }

}


console.log(arrayDiff(hege, stale))