
const http = require('http');

const express=require('express');

const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.sendFile(__dirname +"/index.html");
});

app.post("/", function(req, res){

   const City=req.body.CityName;
   console.log(City);
  
   http.get("http://api.openweathermap.org/data/2.5/weather?q="+City+"&units=metric&appid=ee3884b056aba2098cc4f03fe8ee63dc", function(resp){

    console.log(resp.statusCode);

    resp.on("data", function(data){
        const weatherData = JSON.parse(data);
        const temp=weatherData.main.temp;
        const discription =weatherData.weather[0].description;
        const icon =weatherData.weather[0].icon;
        const imageUrl="http://openweathermap.org/img/wn/"+icon+"@2x.png";

        res.write("<p>The weather is currently " + discription + " </p>")
        res.write("<h1>The Temperature in " + City + " is " + temp + " Degree Celcius</h1>");
        res.write("<image src="+imageUrl+">")
        res.send();
    })
})
})




app.listen(80,function(){
    console.log("Sever Running at port 80");
});