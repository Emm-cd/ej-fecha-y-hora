const express = require("express");
require("dotenv").config();
const app = express();
const datos = require("./middleware");

//middleware
var saludo =(req,res, next) =>{
    console.log("hola");
    next();
}

app.use('/primeraruta', datos);
app.use('/segundaruta', datos);

app.get("/", saludo, (req,res)=>{
    res.send("Hola estas en raiz, para visualizar las dos rutas extras escribe ya sea /primeraruta o /segundaruta");
});


app.get("/home", (req,res)=>{
    res.send("hola estas en home");
});

app.get("/primeraruta", (req,res)=>{
    res.send(`<p>Es la primera ruta, accediste en la siguiente fecha y hora.</p><p>Fecha: ${req.fecha}</p>
        <p>Hora: ${req.tiempo}</p><p>¡BIENVENIDO USUARIO!</p>`);


});

app.get("/segundaruta", (req,res)=>{
    res.send(`<p>Es la segunda ruta, accediste en la siguiente fecha y hora.</p><p>Fecha: ${req.fecha}</p>
        <p>Hora: ${req.tiempo}</p><p>¡SIGUE EXPLORANDO NUESTRA PÁGINA!</p>`);
});


const port=process.env.PORT || 3000
app.listen(port, ()=>{
    console.log("Servidor en http://localhost:" +port);
    
});
