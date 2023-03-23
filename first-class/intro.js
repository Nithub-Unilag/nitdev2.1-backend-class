const http = require('http');


// create the server and add a request listener to the server.
const server = http.createServer(function(req, res) {
    console.log(req.headers["user-agent"])
    res.end("Welcome to nodejs class")
})

server.listen(3000, function(){
    console.log("Our first server has started")
});
