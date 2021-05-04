let object = {
    firstname: "naufal",
    lastname: "hendrawan",
    occupation: "unemployed"

}

function panggil() {
    console.log(object.firstname + " " + object.lastname)
    console.log(object.occupation)
    console.log(object['firstname'] + " " + object['lastname'] + " " + object['occupation'])

    //tambah objek baru
    object.hobby = "main"
    console.log(object.hobby)
    //cara 2
    object['hobbies'] = "main game"
    console.log(object.hobbies)
    //delete occupation
    delete object.occupation
    console.log(object)



}

panggil()