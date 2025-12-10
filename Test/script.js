const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const form = new FormData();
form.append("file", fs.createReadStream("./picture.jpg"));

axios.post("http://localhost:3000/upload", form)
.then(res => console.log(res.data))
.catch(err => console.log(err));
