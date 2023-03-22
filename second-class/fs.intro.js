// Work with files

const fs = require("fs");

// create folder
fs.mkdirSync('nodejs-class-file-system', function(err){
    if(err){
       console.log(`Error creating directory ${err}`) 
    }else{
        console.log('directory created')
    }
})

// use 