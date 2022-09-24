const fs=require('fs');
const http=require('http'); 

var server=http.createServer((request,response)=>{
    var fileName="index.html";
    fs.readFile(fileName,(err,data)=>{
        var str=data.toString();
        response.write(str);
        response.end();
    })
});

server.listen(8000);
console.log("HTTP server is listening on port 8000");