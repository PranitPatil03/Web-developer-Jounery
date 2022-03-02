const express=require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"))

mongoose.connect('mongodb://localhost:27017/wikiDB',{useNewUrlParser: true})

const articleSchema={
    title: String,
    content: String
}

const Article = mongoose.model('article', articleSchema)

app.route('/articles')

.get(function(req, res) {
   
    Article.find(function(err, foundarticles) {

        if(!err){
            console.log(foundarticles);
        }
        else{
            console.log(err);
        }
    });
})

.post(function(req, res) {

    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    
    newArticle.save(function(err){
        if(!err){
            res.send("Successfully Insert New Article")
        }else{
            res.send(err);
        }
    });
})

.delete(function(req, res) {
    Article.deleteMany(function(err){
        if(!err){
            res.send("Successfully Delete Article")
        }
        else{
            res.send(err);
        }
    })
})


app.route("/articles/:articlesTitle")

.get(function(req, res){

Article.findOne({title:req.params.articlesTitle}, function(err, foundarticle){

    if(foundarticle){
        res.send(foundarticle)
    }
    else{
        res.send("No Article Found!")
    }
});
})

.put(function(req, res){

    Article.updateOne(
      {title: req.params.articlesTitle},
      {title: req.body.title, content: req.body.content},
      {overwrite: true},
      function(err){
        if(!err){
          res.send("Successfully updated the selected article.");
        }
      }
    );
  })

app.listen(3000,function(){
    console.log('listening on port 3000');
})