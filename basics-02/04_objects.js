//Singleton Object
// const tinderUser = new Object();

const tinderUser={}
 tinderUser.id="123abc";
 tinderUser.name="Sammy";
 tinderUser.isLoggedIn=false;
//  console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
        first_name:"Hitesh",
        last_name:"choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.first_name)
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}

// const obj3={obj1,obj2}
// const obj3 =Object.assign({},obj1,obj2);

const obj3={...obj1,...obj2}
// console.log(obj3)

const user=[
    {
        id:1,
        email:"bab@gmail.com"
    },
    {
        id:2,
        email:"ab@gmail.com"
    },
    {
        id:3,
        email:"b@gmail.com"
    },
]

user[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
 console.log(tinderUser.hasOwnProperty('isLoggedIn'));


