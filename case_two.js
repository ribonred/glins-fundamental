const arrayDiff = (arr1, arr2) => {
  const angka = arr2[0];
  return arr1.filter((x) => x !== angka);
};

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));