"use strict";
/*
let hasDrivesLicense = false;
const passTest = true;
if (passTest) hasDrivesLicense = true;
if (hasDrivesLicense) console.log("I can drive");
const interface = "Artem";


function logger() {
  console.log("My name is Artem");
}

// calling/running/invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oragnes) {
  const juice = `Juice with ${apples} apples and ${oragnes} oranges!`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Fubction declaration
function calcAge1(birthYear) {
  return 2025 - birthYear;
}
const age1 = calcAge1(1996);

// Function expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};
const age2 = calcAge2(1996);
console.log(age1, age2);

// Arrow function
const calcAge3 = (birthYear) => 2025 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1996, "Artem"));

const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
};
const describe = describeCountry("Russia", 13, "Moscow");
console.log(describe);


// 006 Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePices = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apples and ${orangePices} piece of oranges!`;
  return juice;
}

console.log(fruitProcessor(2, 3));



function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const russia = percentageOfWorld3(800);
const china = percentageOfWorld3(1441);
const usa = percentageOfWorld3(700);
console.log(russia, china, usa);

const describePopulation = (country, population) => {
  const perPopulatinon = percentageOfWorld3(population);
  return `${country} has ${population} million people,
which is about ${perPopulatinon} of the world`;
};

console.log(describePopulation("China", 1441));

const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1996, "Artem"));
console.log(yearsUntilRetirement(1949, "Artem"));



const calcAge = function (birthYear, firstName) {
  const age = 2025 - birthYear;
  console.log(`${firstName} is ${age} yeasr old`);
  return age;
};

const age = calcAge(1991, "Artem");
console.log(age);

const future = age + 1;
console.log(future);
*/

// #Coding challenge
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolhins = calcAverage(23, 34, 27);
const avgKoalas = calcAverage(85, 54, 41);

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log("no one wins");
  }
};
console.log(checkWinner(avgDolhins, avgKoalas));

// 010 Introduction to Arrays
