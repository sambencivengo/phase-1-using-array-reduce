// const batteryBatsches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const products = [
    { name: 'Shampoo', price: 4.99 },
    { name: 'Donuts', price: 7.99 },
    { name: 'Cookies', price: 6.49 },
    { name: 'Bath Gel', price: 13.99 }

  ];

function getTotalAmountForProducts(products){
    let totalPrice = 0;
    for (const product of products){
        totalPrice += product.price;
    }
    return totalPrice;
}   

console.log(getTotalAmountForProducts(products)); 
// LOG: 33.46
// ------------------------------------------------

const couponLocations = [
    { room: 'Living room', amount: 5 },
    { room: 'Kitchen', amount: 2 },
    { room: 'Bathroom', amount: 1 },
    { room: 'Master bedroom', amount: 7 }
];


function  ourReduce(arr, reducer, initial){
    // accepts 3 arguments:
    // the array we want to reduce, the callback ƒ(or reducer()) 
    // and the initialial value, which is literally the 
    // starting amount of coupons
    let accumulator = initial;
    // the accumulator is starting the initial count of coupons
    for (const element of arr) {
        // for of loop to iterate over the array
        accumulator = reducer(accumulator, element);
        // accumulator is assigned to the callback funciton, reducer()
        // acting on the elements of the array
    }
    return accumulator;
    // return value
}

// Note that ourReduce() is generalized: the specifics (the callback 
// function and initial value) have been abstracted out, making our 
// code more flexible. If, for example, we already have three coupons in 
// our hand, we can easily account for that without having to change 
// any code by adjusting the initial value when we call ourReduce():

function couponCounter(totalAmount, location) {
    // 
    return totalAmount + location.amount;
  }

console.log(ourReduce(couponLocations, couponCounter, 3)); // LOG: 18

// Wit JavaScript's reduce() method, we don't need to write our own version
console.log(couponLocations.reduce(couponCounter, 0)) // LOG: 15

// another numerical exambnle:
const doubledAndSUmmed = [1, 2, 3];
console.log(doubledAndSUmmed.reduce(function (accumulator, element){
    // calling .reduce() on our input array and passing it two arguments:
    // the callback function and an option start value for the accumlator  
    return element * 2 + accumulator}, 0));
    // cb ƒ updates the value of accumulator and then passes it as the
    // first value of the cb ƒ on the next iteration
    // when nothing is left to iterate, the final value or total
    // is returned


// initialization value is optional but leaving it out might lead to a 
// surprise. If not init val is supplied, the first element of the array
// is used as the starting value. .reduce() then executes the cb ƒ, passing
// this starting value and the second element of the array as two arguments.
// In other words, the code iside the callback IS NEVER EXECUTED for the 
// first element in the array which can lead to unexpected results.

// --------------------------------------------------------------
// Demonstrate using reduce() with an Object as the return value
// --------------------------------------------------------------

// the output of reduce() does not need to be a primitive value like
// a number or a string

// const hogwartsHourses = {
//     'Slytherin': [],
//     'Gryffindor': [],
//     'Hufflepuff': [],
//     'Ravenclaw': [],
// }

// sortingHat.assign(studentName);

// incomingStudents.reduce(function(houses, student) { 
//     houses[sortingHat.assign(student)].push(student)}, hogwartsHouses)


let totalBatteries;

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

batteryBatches.reduce(function(accumlator, value) {
    return totalBatteries = accumlator + value
},0);

console.log(totalBatteries)