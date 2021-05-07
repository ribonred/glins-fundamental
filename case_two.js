// var a = [2, 3, 4, 5, 5, 4];
// a.filter(function (value, index) { return a.indexOf(value) == index });

// console.log(a)



// let names2 = ['Matt', 'Shinoda', 'Shinoda', 'Chester',]

// let dup = [...new Set(names)];
// let dup2 = [...new Set(names2)]
// console.log(dup, dup2);
let names = ['Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Nancy'];

const findDups = (names) => {
    const dups = []
    const compare = ['Matt', 'Shinoda', 'Chester']

    for (let index of names) {
        if (!compare.includes(index)) {
            compare.push(index)
        }
        else {
            dups.push(index)
        }
    }
    return compare
}

console.log(findDups(names))
