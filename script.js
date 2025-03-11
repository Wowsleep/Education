/* // LECTURE: Values and Variables
let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("Artem");
console.log(23);
let firstName = "Artem";
console.log(firstName);
console.log(firstName);
console.log(firstName);

/* EX
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console

let country = "Russia";
let continent = "Eurasia";
let population = 144;

console.log(country);
console.log(continent);
console.log(population);


let jsIsFun = true;
console.log(jsIsFun);
console.log(typeof jsIsFun);
console.log(typeof 23);
console.log(typeof "Artem");
console.log(typeof null);


let marksMass = 95;
let marksHeight = 1.88;
let johnsMass = 85;
let johnsHeight = 1.76;

let marksBMI = marksMass / marksHeight ** 2;
let jhonsBMI = johnsMass / johnsHeight ** 2;

let markHigherBMI = marksBMI > jhonsBMI;
console.log(marksBMI);
console.log(jhonsBMI);
console.log(markHigherBMI);

const now = 2025;
const ageArtem = now - 1996;
const ageAnka = now - 1998;
console.log(ageAnka, ageArtem);
console.log(ageArtem * 2, ageArtem / 2, 2 ** 3);

const firstName = "Artem";
const lastName = "Kozlov";
console.log(firstName + lastName);
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;

x++;
console.log(x);
const isFullAge = ageArtem >= 18;
console.log(isFullAge);
console.log(now - 1996 > now - 1998);

const isISland = false;
let language;
let country = "Russia";
let continent = "Eurasia";
let population = 144;
console.log(
  typeof isISland,
  typeof language,
  typeof country,
  typeof continent,
  typeof population
);
language = "Russian";
console.log(language);
console.log(population++);
const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);


let marksMass = 78;
let marksHeight = 1.69;
let johnsMass = 92;
let johnsHeight = 1.95;

let marksBMI = marksMass / marksHeight ** 2;
let jhonsBMI = johnsMass / johnsHeight ** 2;

let markHigherBMI = marksBMI > jhonsBMI;
console.log(marksBMI);
console.log(jhonsBMI);
console.log(markHigherBMI);

console.log(
  `Mark's BMI (${marksBMI}) is higher than John's (${jhonsBMI})!" or "John's BMI is higher than Mark's!`
);


const age = 15;

if (age >= 18) {
  console.log("Artem can start driving license🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1996;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


//Coding Challenge #2
let marksMass = 78;
let marksHeight = 1.85;
let johnsMass = 92;
let johnsHeight = 1.95;

let marksBMI = marksMass / marksHeight ** 2;
let jhonsBMI = johnsMass / johnsHeight ** 2;

let markHigherBMI = marksBMI > jhonsBMI;
console.log(marksBMI);
console.log(jhonsBMI);
console.log(markHigherBMI);

console.log(
  `Mark's BMI (${marksBMI}) is higher than John's (${jhonsBMI})!" or "John's BMI is higher than Mark's!`
);

if (marksBMI > jhonsBMI) {
  console.log(
    `Mark's BMI (${marksBMI}) is higher than John's (${jhonsBMI})!" or "John's BMI is higher than Mark's!`
  );
} else {
  console.log(
    `John's BMI (${jhonsBMI}) is higher than John's (${marksBMI})!" or "Mark's BMI is higher than Mark's!`
  );
}

// Type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(String(23));

// Type coercion
console.log("I am " + 23 + " years old");

let n = "1" + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Artem"));
console.log(Boolean({}));
const money = 10;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("you should get a job");
}

//020 Equality Operators == vs. ===


const age = 19;
if (age === 18) console.log("Yes!!1");

if (age == 18) console.log("Yes!!2");

const favourite = Number(prompt("What's ypur favorite number?"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is amazing");
}

if (favourite !== 23) console.log("Why not 23?");

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Anna is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Anna can drive!");
} else {
  console.log("Someone else should drive");
}


// Coding Challenge #3

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win!");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win!");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("It is draw!");
} else {
  console.log("No one wins");
}
*/

// 025 The switch Statement

const day = "saturday";
if (day === "monday") {
  console.log("Plan course");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Recod videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}
