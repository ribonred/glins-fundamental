let object = {
    firstName: 'Dewi',
    lastName: 'Anggraini',
    occupation: 'Admin',
};
console.log(object);  //print semua

object.hobby = 'Masak';
console.log(object); // nambahin hobi

delete object.occupation;
console.log(object); //hapus occupation
