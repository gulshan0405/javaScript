//types-> premitive and non premitive

//premitive
//7 types: String,Number,Boolean,null,undefined,Symbol,.BigInt
const score=100;
const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail;
const id=Symbol('123');
const anotherId=Symbol('123');
// console.log(id==anotherId);
const BigInt=1516184964846164846n;


//Reference (Non-Premitive)
//Array,Objects,Functions

const Heros = ["shaktiman", "naagraj", "doga"];

let person={
    name:"gulshan",
    age:24,
};

const myFUnc = function (){
    console.log("helo")
}

console.log(typeof(BigInt));

//------------------------------------------

//Memory

//Stack(Premitive) and Heap(NOn-Premitive)

let myYoutubeName="Gulshan004";

let anotherName=myYoutubeName;
anotherName="chai or code"
console.log(myYoutubeName)
console.log(anotherName)

let userOne={
   email:"user@google.com",
   upi:"user@ybl"
}

let userTwo=userOne;
userTwo.email="user2@google.com"
console.log(userOne.email)
 console.log(userTwo.email);

