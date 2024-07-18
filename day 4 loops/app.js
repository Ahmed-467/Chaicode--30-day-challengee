/// Task 4: loops

//------------ Task-------------Activites://

//.write a program to print number from 1 to 10 using in loop

for(let i =1; i <= 10; i++){
    console.log(i);
}

//. Task 2: write a program to print the multiplication table 5 using a for loop.
// Multiplication table for 5
const number = 5;

// Using a for loop to print the multiplication table
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

///---------------Activity 2: While loop---------------------//

//.Task 3: write a program a calculate the sum number from i to 10 using a while loop.
let i = 1;
// Initialize sum to 0
let sum = 0;

// Using a while loop to calculate the sum of numbers from i to 10
while (i <= 10) {
  sum += i;
  i++;
}
//  result the console
console.log(`The sum of numbers from 1 to 10 is: ${sum}`);


// • Task 4: Write a program to print numbers from 10 to 1 using a while loop

let j = 10;
while (j >= 1) {
    console.log(j,`j`);
    j--;
}


//------------- Activity 3: Do...While Loop---------------//

// • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

let a = 1;
do{
  console.log(a,'a');
  a++
}while (a<=10);


// • Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let m = 2;
do{
  console.log(`${m} ${m*m}`);
  n--;
}while (m>=10);




















