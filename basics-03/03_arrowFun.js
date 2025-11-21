const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} ,Welcome To Website`);
    // console.log(this)
  },
};

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)

//'this' is not worked in function and give the output undefined
// function chai(){
// let username="hitesh"
// console.log(this.username)
// }

// chai();

// const chai = function () {
//   let username = "hitesh";
//   console.log(this.username);
// };

// const chai =  ()=> {
//   let username = "hitesh";
//   console.log(this.username);
// };
// chai()


// const addTwo =(n1,n2)=>{
//     return n1+n2;
// }

//implicit return arrow function
// const addTwo =(n1,n2)=>  n1+n2;

// const addTwo =(n1,n2)=>  (n1+n2)

const addTwo =(n1,n2)=>  ({username:"hitesh"});



console.log(addTwo(4,6))

const myArray=[2,4,6,8];

// myArray.forEach()