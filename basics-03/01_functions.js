function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()

// function addTwoNumbers(n1,n2){
//       console.log(n1 + n2)
// }

// function addTwoNumbers(n1,n2){
//   let result = n1 + n2
//   return result;
//  return n1 + n2;
// }

// const result = addTwoNumbers(3,5);

// console.log("Result:",result)

// function loginUserMessage(username) {
//     if(!username){
//          console.log("please enter a username!")
//          return;
//     }
//   return `${username} just logged in!`;
// }

// let ans = loginUserMessage();
// console.log(ans);


function calculateCartPrice(val1,val2,...num1){
   return num1
}

// console.log(calculateCartPrice(200,400,500,300,600))


//passing the object to the function
const user={
    username:"hitesh",
    age:33
}

function handleObjects(anyobject){
   console.log(`UserName is ${anyobject.username} and age is ${anyobject.age}`);
}

// handleObjects(user)

handleObjects({
    username:"sam",
    age:23
})

//passing the array to the function

const myNewArr=[200,400,100,600];

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArr))