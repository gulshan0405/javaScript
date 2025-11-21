// var c = 300;

let a = 300;

if (true) {
  let a = 10; //local scope
  const b = 20; //local scope
  var c = 30; //global scope
  console.log("INNER: ",a)
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
}

console.log(a);
// console.log(b);
// console.log(c);
