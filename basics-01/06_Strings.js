const name = "hitesh";
const repoCount = 50;

//  console.log(name+repoCount+" Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("gulshan");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName);
// console.log(gameName.indexOf("l"));

const newString=gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(-4,3);
console.log(anotherString)

const newStringOne="   Hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','_'))

console.log(url.includes('h'))

console.log(gameName.split('-'))