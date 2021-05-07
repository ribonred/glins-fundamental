const axios = require("axios");

async function getUser() {
    try {
        const response = await axios.get("https://reqres.in/api/users");
        let dataFromInternet = [];
        for (let i = 0; i < response.data.total_pages; i++) {
            const respond = await axios.get(
                `https://reqres.in/api/users?page=${i + 1}`
            );
            respond.data.data.forEach(element => dataFromInternet.push(element));


        }
        // const data = dataFromInternet[0].concat(dataFromInternet[1]);
        console.log(dataFromInternet);
    } catch (error) {
        console.error(error);
    }
}
return getUser();