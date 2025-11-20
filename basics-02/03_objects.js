//singleton
// Object.create

//object literals

const mySym = Symbol("key1");
const user = {
  name: "gulshan",
  "Full Name": "Gulshan Xalxo",
  [mySym]: "mykey1",
  age: 24,
  location: "Jaipur",
  email: "abc@gmail.com",
  isLoggedIn: false,
  lastLoggedIn: ["Monday", "Saturday"],
};

//how to access the object
// console.log(user.name);
// console.log(user["email"]);
// console.log(user["Full Name"]);
// console.log(typeof mySym);

user.email = "cde@gmail.com";
console.log(user);
// Object.freeze(user);
user.email = "abc@gmail.com";
console.log(user);

user.greeting=function(){
    console.log("hello js user")
}
user.greeting2=function(){
    console.log(`hello js user,${this.name}`)
}

console.log(user.greeting());
console.log(user.greeting2())