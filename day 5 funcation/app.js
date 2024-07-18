// Day 5: Functions

// Tasks/Activities:

//--------- Activity 1: Function Declaration------------

//.Task 1 write a funcation to check if a number is even or odd and the log the result to the console.
// function checkEvenOdd(number) {
//     if (number % 2 === 0) {
//         console.log(number + " is even.");
//     } else {
//         console.log(number + " is odd.");
//     }
// }

// // Example usage:
// checkEvenOdd(10); // 10 is even.
// checkEvenOdd(7);  // 7 is odd.


//. Task 2: Write a funcation to calculate the square of number and reture the result.

function calculateSquare (number){
    return number * number;
}

//----------Example using---------------//
let result1 = calculateSquare(4);
let result2 = calculateSquare(8);

console.log(result1);
console.log(result2);

//--------------Activity 2:------------------//


//------------------funcation Expression----------------//

//Task 3: write a funcation expression to fine the maximum of two number and the log the result to the console.

const findMax = function(a,b){
let max = (a > b) ? a: b;
console.log("the maximum of" + a + "and" + b + "is" + max);
};


findMax(7, 10);
findMax(20, 16);



