// // //named function 
// // function greet(){
// //     console.log("hey everyone");
// // }
// // greet()

// // const { useMemo } = require("react");


// // //anonymous function
// // let greet2 = function(){
// //     console.log("hey everyone");
// // }

// // greet2();


// // //arrow function
// // let greet3 = () => {
// //     console.log("hey everyone");
// // }

// // greet3();


// // const greet = (count) =>{
// //     console.log("bhnchod",count);
// // }
// // greet(2)



// // const square = (num) => num*num

// // console.log(square(2))


// //call back function

// const calculate = (a,b,operation) => {
//     return operation(a,b)

// }

// const summation = calculate(2,3,function(n1,n2){
//     return n1 + n2
// })

// console.log(summation);


// const substraction = calculate(2,3,function(n1,n2){
//     return n1 - n2
// })

// console.log(substraction);

// // calculate(2,3,function(n1 , n2){
// //     return n1+n2
// // })


const arr = [2,4,5,6,2,-4,-1,-8,-3];

//method 1
jo 
//method 2
// const PrintFristNegativeNumber = (num) =>num {
//     return num < 0
// }

// method 3
// const printFirstNegativeNumber = (num) => {

// //     if (num < 0) {

// //         return num;

// //     }

// // }


// const result = arr.findIndex(PrintFristNegativeNumber)
// console.log(result);


arr.forEach((num, index) => {
    console.log("Element: ", num, " Index: ", index);
});

