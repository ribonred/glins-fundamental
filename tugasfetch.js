const axios = require("axios");

async function ambilData() {
  try {
    const resUser = await axios.get("https://reqres.in/api/users");
    let dataFromInternet = [];
    for (let i = 0; i < resUser.data.total_pages; i++) {
      // console.log(i);
      const res2 = await axios.get(`https://reqres.in/api/users?page=${i + 1}`);
      res2.data.data.forEach((element) => dataFromInternet.push(element));
    }
    console.log(dataFromInternet);
  } catch (error) {
    console.error(error);
  }
}
ambilData();
