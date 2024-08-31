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
    
    console.log(date.toLocaleTimeString('en-US', timeOptions));
    console.log(date.toLocaleDateString('en-US', dateOptions));
};

  module.exports=datos;
  