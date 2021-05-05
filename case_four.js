let namesAndHobbies = {
    'elie': "JavaScript",
    'matt': "jogging",
    'janey': "table building",
    'tim': "sailing"
};

// output seharusnya
for (let i = 0; i < Object.keys(namesAndHobbies).length; i++) {
    console.log(`${Object.values(namesAndHobbies)[i]} -- ${Object.keys(namesAndHobbies)[i]}`);
}

//tambah nama dan hobi saya
namesAndHobbies.dewi = "traveling";
console.log(namesAndHobbies);

//keluarin object saya
if (namesAndHobbies.dewi) {
    console.log(`${Object.keys(namesAndHobbies)[4]} ${namesAndHobbies.dewi}`);
}