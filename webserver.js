//we want to build web server;
const http=require('http'); //library

var server=http.createServer((request,response)=>{
console.log("request is received from client");
response.write("<h1>Welcome</h1>");
response.write("<hr/>");
response.write("<ol> <li>DBDA</li><li>PGDAC</li> </ol>");
response.end();
});

server.listen(9000);
console.log("HTTP server is listening on port 9000");