let sebelum = [1, 2, 2, 2, 0, 3, 4, 5, 5, 0];
let sesudah = [];

for (let i = 0; i < sebelum.length; i++) {
  console.log(i + 1);
  if (sesudah.indexOf(sebelum[i]) == -1) {
    sesudah.push(sebelum[i]);
  } else {
    console.log("test");
  }
}

console.log(sesudah);
