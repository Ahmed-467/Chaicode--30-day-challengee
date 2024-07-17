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



// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
function getGrade(score) {
    let grade;
    switch (true) {
     case (score >= 90 && score <= 100):
            grade = 'A';
            break;
       case (score >= 80 && score < 90):
            grade = 'B';
            break;
      case (score >= 70 && score < 80):
            grade = 'C';
            break;
      case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 0 && score < 60):
            grade = 'F';
            break;
        default:
            grade = 'your are sucessfully passed';
    }
    console.log(`Score: ${score}, Grade: ${grade}`);
}

// Test the function with different inputs
getGrade(95); // Output: Score: 95, Grade: A
getGrade(85); // Output: Score: 85, Grade: B
getGrade(75); // Output: Score: 75, Grade: C
getGrade(65); // Output: Score: 65, Grade: D
getGrade(55); // Output: Score: 55, Grade: F
getGrade(110); // Output: Invalid score. Please enter a score between 0 and 100.




//------------------ Activity 4: Conditional (Ternary) Operator------------------//

// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let program = 2;
let answer = program % 2 === 0 ? 'even' : 'odd';
console.log(answer);


//------------------------ Activity 5: Combining Conditions---------------------//

// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2019
let lastYear;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    leapYear = true;
} else {
    leapYear = false;
}
console.log(leapYear);

//---------------------completed------------------//




