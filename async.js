'use strict';

const axios = require('axios');


// const getURL = async function() {
//     try{
//         const res = await axios.get('https://reqres.in/api/users');
//         let dataFromInternet = [];
//         for(let i = 0; i < res.data.total_pages; i++) {
//            const respond =  await axios.get(`https://reqres.in/api/users?page${i + 1}`);
//            respond.data.data.forEach(i => dataFromInternet.push(i))
//         // respond.data.data = dataFromInternet;
//         }
//         console.log(dataFromInternet);
//     }
    
//     catch(err) {console.log(err)}

// }

// getURL();

// const getURLAxios = function() {
//     axios.get('https://reqres.in/api/users')
//     .then(res => {

//     })
//     .catch(err => console.log(err))
// }

// getURLAxios();

let arr = [1,2,3,4,5];

for(let i = 0; i < arr.length; i++)
console.log(arr[i + 1]);
// console.log(arr[i] + 1)