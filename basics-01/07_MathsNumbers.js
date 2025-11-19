// const score = 400; //js automatically identify the data type and declare it
// console.log(score);
// //but you can also
// const balance = new Number(100); //explicitly declaring the number data type in the code
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //to add the point after the numerical value of length 2

// const otherNumber = 23.656;
// console.log(otherNumber.toPrecision(2));

// const hundreds= 100000;
// console.log(hundreds.toLocaleString('en-IN'));

//--------------------------Maths--------------


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.min(3,5,1,3,6));

console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;
console.log( Math.floor(Math.random()*(max-min+1))+min);