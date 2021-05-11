


var hege = ["Cecilie", "Lone", "Linus", "totok"];
var stale = ["Emil", "Tobias", "Linus"];

const checkData = () => {
    let arr = []
    const check = new Set(hege.concat(stale))
    const res = arr.push(...check)
    return arr
}

console.log(checkData())