const app = express();
const datos = require("./fecha");
var rutas = require("express").Router();


app.get("/", saludo, (req,res)=>{
    res.send("Hola estas en raiz, para visualizar las dos rutas extras escribe ya sea /primeraruta o /segundaruta");
});


app.get("/home", (req,res)=>{
    res.send("hola estas en home");
});

app.get("/primeraruta", bienvenida, (req,res)=>{
    res.send(`<p>Es la primera ruta, accediste en la siguiente fecha y hora.</p><p>Fecha: ${req.fecha}</p>
        <p>Hora: ${req.tiempo}</p><p>¡BIENVENIDO USUARIO!</p>`);

});

app.get("/segundaruta", animo, (req,res)=>{
    res.send(`<p>Es la segunda ruta, accediste en la siguiente fecha y hora.</p><p>Fecha: ${req.fecha}</p>
        <p>Hora: ${req.tiempo}</p><p>¡SIGUE EXPLORANDO NUESTRA PÁGINA!</p>`);
});

module.exports = rutas;