const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// console.log(marvel_heros[3][1])

// const all_heros=marvel_heros.concat(dc_heros);
// console.log(all_heros);

//spread operator (...)
const all_heros = [...marvel_heros, ...dc_heros];
// console.log(all_heros)

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
//flat->Returns a new array with all sub-array
// elements concatenated into it recursively up
//  to the specified depth.
const real_another_Arr = anotherArr.flat(Infinity);
// console.log(real_another_Arr);

console.log(Array.isArray("Hitesh"));

console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "Hitesh" })); //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

//of-> convert the variable value into Array

console.log(Array.of(score1, score2, score3));
