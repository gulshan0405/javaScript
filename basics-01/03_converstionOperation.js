let score = "gulshan";
console.log(typeof score);

console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);//NaN - not a number


//"33" => 33
//"33abc" => NaN
//true => 1 ; false => 0
//null => 0
//undefined => NaN
//"gulshan" => NaN

let isLoggedIn = 1;
let booleanIsLoggedIn= Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

//1 => true
//"" => false
//"abc" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber)
console.log(stringNumber)