const http = require('http');


const server = http.createServer(function(req, res) {
    console.log(req.headers["user-agent"])
    res.end("Welcome to nodejs class")
})

server.listen(3000, function(){
    console.log("Our first server has started")
});