//Task:1  Write a program to check if a number is positive, negative, or zero, and log the result to the console


function checkNumber(num) {
    if (num > 10) {
      console.log(`${num} is positive.`);
    } else if (num < 10) {
      console.log(`${num} is negative.`);
    } else {
      console.log(`${num} is zero.`);
    }
  }
  
  // Example usage:
  checkNumber(5);    // Output: 5 is positive.
  checkNumber(-6);   // Output: -3 is negative.
  checkNumber(0);    // Output: 0 is zero.


 // • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

 let age = 18;
 if(age >= 18);
 console.log("eligible");


/// -------------------------- Activity 2: ----------------------//

// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let Ahmed = 3
let jawad = 4
let haseeb = 6
if(Ahmed < haseeb){
    if(jawad > haseeb){
        console.log(`${Ahmed} is good`);
    }else{
        console.log(`${haseeb} is very good`);
    }
} else{
    console.log(`${jawad} is amazing`);
}
       

