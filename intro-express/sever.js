const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("<h3>This is Sever Ruuning at 80 port</h3>");
});

app.get("/contact", (req, res)=>{
    res.send("<h3>Contact at pranitpatil@gmail.com</h3>")
})

app.get("/about", (req, res)=>{
    res.send("<h3>Hello , I am Pranit Patil</h3>")
})


app.listen(80,function() {
    console.log("Sever is started at port 80");
})