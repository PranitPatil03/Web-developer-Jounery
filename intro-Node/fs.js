const http = require('http');

const fs = require('fs');

http.createServer(function (req, res){

fs.readFile("file2.txt", function (err, data){

    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.write(data);
    return res.end();
});

}).listen(80);


