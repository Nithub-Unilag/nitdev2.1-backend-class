// Work with files

const fs = require("fs");

// create folder
// fs.mkdir('nodejs-class-file-system', function(err){
//     if(err){
//        console.log(`Error creating directory ${err}`) 
//     }else{
//         console.log('directory created')
//     }e
// })


// creating a file in the folder
fs.appendFile('nodejs-class-file-system/solution-to-assignment',"This is the assignment solution","base64url", function(err){
    if(err){
        console.log(err)
    }else{
        console.log("File created and written into");
    }
})