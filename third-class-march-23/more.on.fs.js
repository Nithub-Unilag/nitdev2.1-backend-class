// Work on reading contents from a file.

// check if the path given by a user is 
    // a file
    // a directory


const fs = require("fs");

// creating the folder 
fs.mkdir('storage', function (err){
    if(err){
        console.log("Error creating folder", err);
    }else{
        console.log("folder created succesfully")
    }
});


// creating a file in the `storage` folder.