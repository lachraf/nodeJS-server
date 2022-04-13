
const http = require("http");
const PORT = 3000;

const server = http.createServer(function(request, response){

    response.setHeader('Content-Type','application/json')
    response.setHeader("Access-Control-Allow-Origin","*")
    response.writeHead(200)
    response.end("hello world")
});


server.listen(PORT,function(){ 
console.log(`server port : ${PORT}`)
})