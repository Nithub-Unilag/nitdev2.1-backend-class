// function 

// // 1,2,3,3,4 Number(1);
// "My name is Mr.Joshua".charAt(0);

// const josh = new String("My name is Mr.Josh");
// const result = josh.charAt(0);
// console.log(`Character at 0 is ${result}`)



// function-expression and Higher order function
// const exprezzo = function(){
//     console.log("exprezooo")
// }
// function hof(shout){
//     shout();
// }

// hof(exprezzo);





const userDatabase = [
    {
        firstname: "Yetunde",
        lastname: "Badmos",
        password: "badabada",
        email: "ye@hotmail.com",
        age: 10
    },
    {
        firstname: "Joshua",
        lastname: "Halland",
        password: "hahahaha",
        email: "josh@yahhoo.com",
        age: 45
    },
    {
        firstname: "Innocent",
        lastname: "Saka",
        password: "sakakaka",
        email: "inno@gmail.com",
        age: 90
    }
]

function login(email, password){
    const user = userDatabase.find(function (user) {
        return user.email === email;
    });
    console.log(`this is user at this point`, user)
    if(user){
        const passwordIsEqual = user.password === password
        if(passwordIsEqual){
            console.log("Log in successful")
        }else{
            console.log("Incorrect email or password")
        }
    }else {
        console.log("No such user in our application, please sign up");
    }
}



// login("goodysamson@gmail.com", "password")
login("inno@gmail.com", "sakakaka")


let amount = 1000;
let change;

console.log(amount, " amount")
console.log(change, " change")

if(amount){
    console.log("DVC is a rich man")
}else {
    console.log("Dey play")
}

if(amount){
    console.log("Dey play");
}else{
    console.log("keep the change")
}














// // classes

// class Humans {
//     // no-args constructor
//     // constructor(){}

//     constructor(name){
//         this.name = name;
//     }

//     walk(){
//         console.log(`${this.name} is walking`)
//     }
// }

// const bidemi = new Humans("Bidemi");
// const innocent = new Humans("Joshua")
// const pelumi = new Humans('Yetunde')

// bidemi.walk();
// innocent.walk();
