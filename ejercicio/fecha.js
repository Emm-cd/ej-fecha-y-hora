function datos(req, res, next) {
    const date = new Date();
    const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    }
    const timeOptions = {
      hour12: true,
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
    };
    
    req.tiempo=date.toLocaleTimeString('en-US', timeOptions);
    req.fecha=date.toLocaleDateString('en-US', dateOptions);
    console.log(req.tiempo);
    console.log(req.fecha);
    next(); 
};

  module.exports=datos;
  