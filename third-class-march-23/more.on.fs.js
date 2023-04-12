// Work on reading contents from a file.

// check if the path given by a user is 
    // a file
    // a directory


const fs = require("fs");

// // creating the folder 
// fs.mkdir('storage', function (err){
//     if(err){
//         console.log("Error creating folder", err);
//     }else{
//         console.log("folder created succesfully")
//     }
// });

// console.log("Storage created.")

// const story = `Suspendisse bibendum vel quam convallis accumsan. Sed sit amet lacinia augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam eget sodales justo. Suspendisse finibus lectus eu lorem efficitur vehicula. Vestibulum sed metus vel eros tristique mattis vel vel arcu. Fusce rutrum pretium vehicula. Nam fermentum quam sed odio ornare, eu dignissim erat dignissim. Vivamus ut lacus vitae lacus malesuada tempus. Nam quis vulputate augue.

// Pellentesque sagittis tellus enim. Vivamus vitae lectus mollis, placerat urna sit amet, porta sem. Curabitur ac auctor lectus. Fusce non placerat massa, vitae egestas tortor. Maecenas et tellus est. Nullam sodales lorem lacus, eu congue nunc vestibulum et. Nunc interdum dui ac nunc consequat dignissim. Praesent non commodo nisl, nec vestibulum arcu. In quis varius ante, sit amet pretium purus. Morbi pretium est aliquam varius blandit. Nullam in eros erat. Maecenas sagittis nunc vel nibh eleifend rhoncus. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse venenatis feugiat nunc, sed varius purus laoreet sit amet.

// Integer a dui nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam dictum fermentum lectus a interdum. Donec eget diam faucibus, viverra metus ac, placerat mauris. Morbi pretium turpis id mattis consectetur. Maecenas eget velit ultricies est rhoncus aliquam ac vel erat. Maecenas cursus mattis dapibus. Pellentesque vitae mollis eros. In id fermentum dui, nec volutpat neque. Aliquam eleifend nunc vel nisl lobortis, ac gravida ante vestibulum. Praesent tristique commodo ligula, eu molestie quam.

// In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam vulputate rhoncus nunc, in suscipit diam lobortis ac. Ut malesuada eleifend quam, in ullamcorper quam eleifend non. Nullam metus turpis, mattis in sapien quis, pellentesque laoreet tortor. Mauris ex risus, tristique et imperdiet vel, congue eu nisi. Nam ultricies leo lectus. Praesent non sem est.

// Mauris tincidunt mauris quis mauris sagittis congue. Quisque a orci non arcu finibus fringilla. Mauris tincidunt eros ut dui tempor, eu laoreet quam vehicula. Sed ligula augue, semper eu bibendum vitae, feugiat non dolor. Aliquam consectetur felis vitae mi molestie, in varius sapien pretium. Morbi et dui ultricies orci volutpat blandit egestas nec erat. Nam finibus eros quis orci suscipit accumsan.

// Fusce pharetra convallis consequat. Duis odio quam, condimentum id elit non, volutpat aliquet augue. Integer non pulvinar risus. Donec sit amet tristique lectus. Morbi dolor quam, posuere et metus non, facilisis semper eros. Nam sed accumsan odio. Maecenas sed placerat sem.

// Nulla lacinia urna non tempor rutrum. Integer consectetur tortor vitae tellus malesuada condimentum. Sed vitae suscipit risus. Suspendisse dictum libero eu erat consectetur pharetra. Sed ante lorem, interdum sit amet blandit nec, placerat sed quam. Aenean facilisis a lacus id lacinia. Nam hendrerit interdum metus et iaculis. Fusce sit amet pellentesque dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque id semper felis. Vivamus fermentum leo non risus pretium sollicitudin. Vivamus felis mi, mattis iaculis dignissim et, porttitor eget felis. Vestibulum laoreet, orci eget posuere rhoncus, ligula neque placerat dolor, eu aliquam ex eros ac tellus. `


// // creating a file in the `storage` folder.
// fs.appendFileSync('./storage/storybook.txt', story, "utf-8");
// console.log("file has been created");

function printFileContents(err, data){
    if(err)console.log(err);
    else console.log(data);
}

fs.readFile('./storage/storybook.txt',"utf8", printFileContents);
