//middleware
var saludo =(req,res, next) =>{
    console.log("hola");
    next();
}

var bienvenida =(req,res, next) =>{
    console.log("¡Welcome!");
    next();
}

var animo =(req,res, next) =>{
    console.log("¡Keep exploring!");
    next();
}
