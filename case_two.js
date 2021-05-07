const removeChar = (arr1, arr2) => {
    let res = [];
    for (let index = 0; index < arr2.length; index++) {
        console.log(arr2[index]);
        for (let i = 0; i < arr1.length; i++) {
            if (arr2[index] !== arr1[i]) {
                res.push(arr1[i]);
            }
        }
    }
    console.log(res);
    return res;
};
removeChar([2, 3, 4, 3, 3, 3, 1, 2], [2]);
