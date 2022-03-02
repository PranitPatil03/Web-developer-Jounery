const express = require('express');

const bodyParser=require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post("/", (req, res) => {

    var height=Number(req.body.height);
    var weight=Number(req.body.Weight);
    var height_sq=height*height;

    var tBmi=Math.floor(weight/height_sq);
    res.send("Your Bmi is " + tBmi);

})

app.listen(80,function(err) {
    console.log("Running on port 80")
})