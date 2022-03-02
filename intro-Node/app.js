const http = require('http');

const dt=require('./index');

const hero = require('./heros')

http.createServer(function (req, res) {
    res.write("The date and time are currently: " + dt.myDateTime());
    res.write("\n The Best superheroe is: " + hero.mySuperHero());
    res.write("\n this is erewr");
    res.write("\n this is erewr");
    res.end();
  }).listen(80);
