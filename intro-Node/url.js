const url =require('url');

const address ="https://www.w3schools.com/nodejs/nodejs_url.asp";

var q=url.parse(address,true);

console.log(q.host);

console.log(q.pathname);

console.log(q.search);

var qdata=q.query;

console.log(qdata)

console.log(qdata.month);

// http.createServer(function (req, res){

//     const q = url.parse(req.url,true);

//     const filename = "."+q.pathname;

//     fs.readFile(filename, function (err,data){
//         if (err){
//             res.writeHead(404,{'Content-Type':'text/plain'});
//             return res.end("404 Not Found");
//         }
//         res.writeHead(200,{'Content-Type':'text/plain'});
//         res.write(data);
//         return res.end();
//     });

// }).listen(80,function(){
//     console.log('Running on port 80')
// })