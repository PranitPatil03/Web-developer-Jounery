const http=require('http');

const uc=require('upper-case')

http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(uc.upperCase("hello world"));
    res.write("\n hello world\n");
}).listen(80,function(err){
    console.log('"ruuning on 80"');
});
