// singleton
// Objects.create

//Objects literals

const myS=Symbol("key1")


const JsUser={
    name:"niranjan",
    "full name":"niranjan Pathani",

    [myS]:"key1",
    age:23,
    location:"Banglore",
    email:"google@gmail.com",
    isLoggedin:false

}
// console.log(JsUser.email);

// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(typeof JsUser[myS]);

JsUser.email="chatg@gmail.com"

// Object.freeze(JsUser)

JsUser.age=25

// console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello",`${this.name}`);
}

JsUser.greetingTwo=function(){
    console.log("hello",`${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());