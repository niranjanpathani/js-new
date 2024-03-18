// singleton

const newO= new Object()
newO.age=23

console.log(newO);


const tinder= new Object()

tinder.id="123aba"
tinder.name="sam"
tinder.islogged=false

// console.log(tinder);
const regularUser={
    email:"google@gamil.ocm",
    fullname:{
        userfulname:{
            firstname:"niranjan",
            lastname:"pathani"
        }
    }
}

console.log(regularUser.fullname?.userfulname.firstname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}

const obj3={
    5:"a",
    6:"b"
}
// const obj3={
//     obj1,obj2
// }
// const obj3=Object.assign(obj1,obj2)
// console.log(obj3);

// const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1, ...obj2,...obj3}
// const obj3={...obj1, ...obj2}
// console.log(obj4);
const users=[
    {
        id:1,
        email:"ab@gamil.com",
    }
]



console.log(tinder);
console.log(Object.keys(tinder));
console.log(typeof(Object.keys(tinder)));
console.log(Object.values(tinder));

console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('islogged'));