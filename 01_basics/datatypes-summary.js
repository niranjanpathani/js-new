// Primitive Datatype

// 7 types: String , NUmber , Boolean ,null ,undefined ,symbol, BigInt

const score = 100;
const scoreV= 10.3

const loggedIn= true
const temp= null

let userEmail = undefined;

const id = Symbol('123')

const anotherId= Symbol('123')
console.log(id === anotherId);

const bigNumber = 738947682923897278739203n




// js is Dynamically typed because in above declarition we no need to specify the type the variables 



// Non Primitive or reference Datatypes

//Arrays ,Objects, Funtions 

const heros = ["Shaktiman","Nagraj", "doga"];

let myObj={
    name: "Niranjan",
    age:22

}

 const myfunction = function (){
    console.log("hello");

}

myfunction();

console.log(typeof bigNumber);


console.log(typeof myfunction);


// ++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non-Primitive )

let myYtName= "niranjan"

let anotherName= myYtName

console.log(anotherName);


let user ={
    email: "user@gmail.com",
    up:"user@ybl"
}

let uerTwo = user;

console.log(uerTwo);

uerTwo.email="userTwo@gmail.com"

console.log(uerTwo.email);
console.log(user.email);
 