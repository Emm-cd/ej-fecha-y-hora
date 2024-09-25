const express = require("express");
require("dotenv").config();
const app = express();
const datos = require("./fecha");

app.use('/primeraruta', datos);
app.use('/segundaruta', datos);

const port=process.env.PORT || 3000
app.listen(port, ()=>{
    console.log("Servidor en http://localhost:" +port);
})