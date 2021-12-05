// "use strict";

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

// function logger() {
//   console.log("My name is Yujin");
// }

// // calling / running / invoking fuction
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// ``;
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

//Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// //Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// //Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

//Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, `Jonas`));
// console.log(yearsUntilRetirement(1980, `Bob`));

// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
//   return juice;
// };

// console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired~:D`);
    return -1;
  }

  // return ;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
Your tasks:

1. Create an arrow function'calcAverage'to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function'checkWinner'that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Usethe'checkWinner'function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉*/

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(44, 23, 71));

//Test1//
let scoreDolphin = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphin, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win(${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphin, scoreKoalas);

checkWinner(576, 111);

///Test2//
scoreDolphin = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphin, scoreKoalas);
checkWinner(scoreDolphin, scoreKoalas);
