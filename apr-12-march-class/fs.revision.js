const fs = require('fs');

// Create a directory
// fs.m kdir('./colors.jiml', (err) => {
//     if(err){
//         console.log(err);
//         console.log("An error occured");
//     }else{
//         console.log("No error occurred");
//     }
// })
// function appendFileHandler(err){
//     if(err){
//         console.log(err);
//     }else {
//         console.log("No error occured");
//     }
// }

// fs.appendFile('./blue.txt',"" , appendFileHandler)

// // put data into a file
// fs.appendFile("./blue.txt", "This is the first info", appendFileHandler)



// read data from a file
// fs.readFile('./blue.txt', "ucs2" , (err, data) => {
//     if(err){
//         console.log(err);
//     }else {
//         console.log(data.toString());
//     }
// })


// delete a file

// fs.rm('./blue.txt', (err) => {
//     if(err) console.log(err);
//     else console.log("no error occurred");
// })

// fs.rmdir('./mono', (err) => {
//     if(err){
//         console.log(err);
//     }else {
//         console.log('No error occurred');
//     }
// })

// create a folder, then put a file in it.



// first

// fs.mkdir('./colors/blue.txt', (err) => {
//     if(err){
//         console.log(err);
//         console.log("An error occured");
//     }else{
//         console.log("No error occurred");
//     }
// });

fs.mkdir('./colors', (err) => {
    if(err){
        console.log(err);
        console.log("An error occured");
    }else{
        
    }
})


// fs.appendFile('./colors/blue.txt', "" ,(err) => {
//     if(err){
//         console.log(err)
//     }else {
//         console.log("file created")
//     }
// })


// fs.appendFile("./colors/blue.txt", "", (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log('NEO')
//     }
// })

