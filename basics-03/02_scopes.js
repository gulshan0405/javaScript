// var c = 300;

let a = 300;

if (true) {
  let a = 10; //local scope
  const b = 20; //local scope
  var c = 30; //global scope
  //   console.log("INNER: ",a)
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "hitesh";
  function two() {
    const website = "youtube";
    // console.log(username);
  }
  // console.log(website);
  two();
}

one();

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = "youtube";
    // console.log(username+website)
  }
  // console.log(website);
}
// console.log(username)

//---------------Interesting -----------------
//here we are calling the function before initializing addone is the normalfunction
//but addtwo is function which is stored in the variable 
//addone can able to access but addtwo can't able to access this 
//phenomena in js is called as hoisting

console.log(addone(5));
function addone(num) {
  return num + 1;
}


// console.log(addTwo(6));
const addTwo = function (num) {
  return num + 2;
};


