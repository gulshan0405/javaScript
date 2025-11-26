//For

for (let index = 0; index < 10; index++) {
  const element = index;
  if (element == 5) {
    // console.log("5 is best number")
  }
  // console.log(element)
}

// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer Loop value ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     // console.log(`Inner Loop value ${j}`);
//     console.log(i + "x" + j + "=" + i * j);
//   }
// }

// let myArray =["flash","batman","superman"];
// console.log(myArray.push.length);
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element)
    
// }


//break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index==5){
//         console.log("Detected 5")
//         break;
//     }
//     console.log(`value of i is ${index}`);
    
// }
for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log("Detected 5")
        continue;
    }
    console.log(`value of i is ${index}`);
    
}