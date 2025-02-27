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
*/

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
