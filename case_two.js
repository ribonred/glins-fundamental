const arr1 = [1, 2, 3, 3, 2, 2, 4];
const arr2 = [3, 2, 4];

const checkData = () => {
    return [...new Set(arr1.concat(arr2))];
};

console.log(checkData());