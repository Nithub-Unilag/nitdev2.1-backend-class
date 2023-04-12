const http = require("http");
const express = require('express');

function serverHandler(request, response) {
    console.log(request.url);
    
    if(request.url.toUpperCase() === "/FRONTEND"){
        response.end("Go to the front of the class")
    }else if (request.url.toUpperCase() === "/BACKEND"){
        response.end("Come to the back of the class");
    }else{
        response.end("What class did you register for")
    }
}


// Cassing types.
// Pascal ==> ToLowerCase
// Snake ==> to_lower_case
// Camel ==> toLowerCase


const server = http.createServer(serverHandler)


server.listen(3000, function () {
    console.log("Server listening on port 3000")
})