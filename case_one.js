let people = ["Greg", "Mary", "Devon", "James"];

const panggilSemua = () => {
  for (var i = 0; i < people.length; i++) {
    console.log(people[i], `<< anggota array ke ${i + 1}`);
  }
};
panggilSemua();

const hapusaku = (nama) => {
  people.shift();
  console.log(people, "<<< greg dihapuskan");
};
hapusaku("greg");

const hapusaku2 = (nama) => {
  people.pop();
  console.log(people, "<<< james dihapuskan");
};
hapusaku2("james");

const tambahMatt = (nama) => {
  people.unshift(nama);
  console.log(people, "<<< matt ditambahkan");
};
tambahMatt("Matt");

const tambahNamaSaya = (nama) => {
  people.push(nama);
  console.log(people, "<<< dany ditambahkan");
};
tambahNamaSaya("Dany");

const stopiteration = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] == "Mary") {
      console.log("^^^^ stop di Mary shay!");
      break;
    }
  }
};
stopiteration(people);

const potongArray = (array, start, end) => {
  console.log(array.slice(start, end), "<<< potong array");
};
potongArray(people, 2, 4);

const letakArray = (array, string) => {
  console.log(array.indexOf(string));
};
letakArray(people, "Mary");
letakArray(people, "Foo");

let people2 = ["Greg", "Mary", "Devon", "James"];
console.log(people2, "<<< redifine variable");
people2.splice(2, 1, "Elizabeth", "Artie");
console.log(people2, "<<< devon terhapus dan menambahkan elizabeth dan artie");

let withBob = people2.concat("Bob");
console.log(withBob, "<<< bob mau join skuy");
