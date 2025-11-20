//De-structure of the object
const course = {
  couseName: "js is hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor

const { courseInstructor:Instructor } = course;//we extract as well as rename the key of the object
// console.log(courseInstructor);
console.log(Instructor);

//JSON

// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }