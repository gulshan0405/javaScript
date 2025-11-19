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