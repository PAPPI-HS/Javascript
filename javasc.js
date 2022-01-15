'use strict';

// const flight = 'LP750';
// const jonas = {
//   name: 'jonas handiwala',
//   passportNum: 8563946743894,
// };

// const plane = function (flightNum, passanger) {
//   flightNum = 'GT750';

//   passanger.name = 'Mr.' + passanger.name;

//   let newNum = Math.trunc(Math.random()) * 100000000000;
//   passanger.passportNum = newNum;
//   if (passanger.passportNum === newNum) alert('CORRCT NUMBER! ');
//   else alert('WRONG NUMBER');
// };

// plane(flight, jonas);

//wEHN EVER AN OBJECT IS PASSED IN AS AN ARGUMENT WHAT ACTUALLY IS PASSED IN IS
// THE REFERANCE OF AN OBJECT

///////////////////////////////////////////////////////////

// const bookings = [];

//We can also calculate default value from expression
// const createBooking = function (
//   flightNum,
//   passangersNum = 1,
//   price = 350 * passangersNum
// ) {
//ES5
// passangersNum = passangersNum || 10;
//   // price = price || 120;
//   const booking = {
//     flightNum,
//     passangersNum,
//     price,
//   };

//   bookings.push(booking);
//   console.log(booking);
// };

// user can't skip arguments while calling a function x(a, ,f) <-- wrong
// x(a,f,r) <-- right
// createBooking('LH123');

//passangerNum is used to calculate price in function createBooking
// pass in price as undefined to stop default passagerNum influince price
// createBooking('ad233', undefined, 1000);

//////////////////////////////////////////////////////////////

// Functions accepting call back functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   let [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher order function

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
//   console.log('\n');
// };

// transformer('javascript is the best!', oneWord);

// transformer('javascript is the best!', upperFirstWord);

// My own example

////////////////////////////////////////////////////////

// Function that returns a function

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

//using arrow function to write same above function

//const greet = greeting => name => console.log(`${greeting} ${name}`);

// let greeter = greet('hey');
// greeter('Jonas');

// greet('hello')('Mia');

//////////////////////////////////////////////////////////////

// The call and apply methods

let book = function (flightNum, passangerName) {
  this.bookings[passangerName.split(' ').join('').toLowerCase()] =
    this.iataCode + flightNum;
  console.log(
    `${passangerName} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
  );
};

const lufthansa = {
  airLine: 'lufthansa',
  iataCode: 'LH',
  bookings: {},
};

// book.call(lufthansa, 239, 'Jonas Schmedtmann');
// console.log(`\n`);
// book.call(lufthansa, 635, 'John Smith');
// console.log(`\n`);
// console.log(lufthansa.bookings);
// console.log(`///////////////////////////////////////////`);

const euroWings = {
  airLine: 'EuroWing',
  iataCode: 'EW',
  bookings: {},
};

// book.call(euroWings, 823, 'Michael Brown');
// console.log(`\n`);
// book.call(euroWings, 467, 'Milly Jeans');
// console.log(`\n`);
// console.log(euroWings.bookings);

// console.log(lufthansa.bookings.johnsmith);

// Apply methods

// const flightData = [453, 'yacob miller'];

// book.apply(lufthansa, flightData);

// book.call(euroWings, ...flightData);

/////////////////////////////////////////////////////////////

// Bind

// Bind does not immediatelly call the function but it returns a function in which this key word is already bound

// const bookEW = book.bind(euroWings);

// bookEW(342, 'amanda billferd');

// Setting in stone other arguments along with this keyword

// const bookEW23 = book.bind(euroWings, 23);
// bookEW23 will now always book eurowing flight 23
// this practice is called partial application meaning part of arguments of a function are allready set to the stone

// bookEW23('Emmy Whitnek');
// bookEW23('Joshua brookie');

//////// With Event listner :

lufthansa.plane = 300;
lufthansa.planeCount = function () {
  console.log(this);

  this.plane++;
  console.log(plane);
};

// console.log(lufthansa);

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.planeCount());

///////////////////////////////////////////////////////////////////

// const pale = {};

// pale.kold = 'cold';
// pale.gdgd = 'chilly';

// console.log(pale);

// let { gdgd, kold } = pale;
// console.log(gdgd, kold);

// const platz = {
//   color: 'Green',
//   bType: 'Sedan',
//   eSize: '1 Leter',
//   abs: true,
//   topSpeed: '150 kph',
// };

// const yaris = {
//   color: 'Green',
//   bType: 'Sedan',
//   eSize: '1 Leter',
//   abs: true,
//   topSpeed: '150 kph',
// };

// const objMatch = function (obj, source) {
//   let count = 0;

//   const objE = Object.entries(obj);
//   const srcE = Object.entries(source);

//   for (const [kb, vb] of objE) {
//     for (const [ks, vs] of srcE) {
//       if (kb === ks && vb === vs) count++;
//     }
//   }

//   count > 0
//     ? console.log(`Object ${count} contain key value pair of source`)
//     : console.log(`Object don't contain key value pair of source`);
// };

// objMatch(platz, yaris);

// const mandu = Object.entries(objB);

// for (let [a, b] of mandu) {
//   console.log(`Key is ${a} and value is ${b}`);
// }
