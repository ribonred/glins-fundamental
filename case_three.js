// Create an object that has your firstName, lastName, and occupation as keys.
// Access each value from your object using both dot notation and bracket notation.
// Add a key for hobby to your object. Remove the key and value for occupation.

const bio = {
    firstName : 'Rizki',
    lastName : 'Giovanni',
    occupation : 'DKI Jakarta'
}

console.log(bio.firstName, bio.lastName, bio.occupation);
console.log(bio['firstName'], bio['lastName'], bio['occupation']);

bio.hobby = 'Badminton';
delete bio.occupation;
console.log(bio);

