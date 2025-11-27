const myNums=[1,2,3];

// const myTotal=myNums.reduce(function(acc,curVal){
//     console.log(`acc: ${acc} and curval: ${curVal}`)
//     return acc+curVal
// },0)

const myTotal=myNums.reduce((acc,curVal)=>acc+curVal,0)
console.log(myTotal)

const ShoppingCart=[
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"dsa course",
        price: 3999
    },
    {
        itemName:"java course",
        price: 1999
    },
    {
        itemName:"ml course",
        price: 12999
    },
]

const priceToPay=ShoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(priceToPay)