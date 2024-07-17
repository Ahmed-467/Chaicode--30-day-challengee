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
       

//--------------- Activity 3: Switch Case------------//

// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

function getDayName(dayNumber) {
    let dayName;
    switch(dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number. Please enter a number between 1 and 7.";
    }
    console.log(dayName);
}

// Test the function with different inputs
getDayName(1); // Output: Sunday
getDayName(4); // Output: Wednesday
getDayName(7); // Output: Saturday
getDayName(8); // Output: Invalid day number. Please enter a number between 1 and 7.

