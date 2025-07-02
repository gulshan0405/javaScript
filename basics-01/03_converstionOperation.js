let score = "gulshan";
// console.log(typeof score);

// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);//NaN - not a number

//"33" => 33
//"33abc" => NaN
//true => 1 ; false => 0
//null => 0
//undefined => NaN
//"gulshan" => NaN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

//1 => true
//"" => false
//"abc" => true

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(typeof stringNumber)
// console.log(stringNumber)

// ***************** Opreations ****************//

let value = 3;
let negVal = -value;
// console.log(negVal);

// console.log(2+2);//Addition
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello ";
let str2 = "gulshan";
let str3 = str1 + str2;
// console.log(str3)

// console.log(1+"2");//12
// console.log("1"+2+2);//122
// console.log(1+2+"2");//32
// console.log((3+4)*5%3);
// console.log(+true);
// console.log(+"");

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);