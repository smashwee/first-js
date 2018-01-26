// alerts are annoying, let's use console.log //
console.log('Welcome');
/*
This will now log to your console
*/

// Create a function that updates a DOM element //
function change (){
  // this is the function body, where it all goes down //
  document.getElementById('foo').innerHTML = 'Welcome';
}

// Basic data types in Javascript
var name = 'Lucille'; // Store a string in a var
var numberOfWidgets = 10; // Number
var isCodingCool = true; // boolean

// store an array in a var
var characters = [50, true, 'Lucille', 'Michael Bluth', 'Tobias', 10, 2];
console.log(characters[0]);

/* create some variables,
store some data in them,
output them to the console. */

var colors = ['green', 'blue', 'red', 'purple', 'pink'];
var numbers = [12, 34, 86, 23];
var animals = ['dog', 'cat', 'bird', 'fish']

console.log(colors[1],numbers[2]);
console.log(animals[3]);

//Multi-dimesional array
var meat = ['ham', 'bologna', 'turkey'];
var fruit = ['oranges', 'apples', 'grapes'];
var food = [meat, fruit];

console.log(food[1][0]);// logs 'oranges' to the console

// var food = [['ham'], ['oranges']]; // could also be written like this

// object:
var user = {
  firstName: 'Lucille',
  age: 40,
  lastName: 'Bluth',
  hasHair: true,
  'has-feet': true,
};

// access properties of our user obj using dot notation
console.log(user.firstName); // This will log 'Lucille'
// we can also access properties on objs using bracket notation
console.log(user['firstName']);// This will also log 'Lucille'
console.log(user['has-feet']);// NEED to use square bracket

// two vars, each containing a #
var number1 = 20;
var number2 = 25;
alert('the result is: ' + (number1 - number2) + ' oops');

var me = {
  firstName: 'Ashley',
  lastName: 'Cacoilo',
  fingerCount: 10,
  interests: ['video games', 'being crafty', 'chocolate']
};

console.log(me.firstName);
console.log(me.lastName);
console.log(me.fingerCount);
console.log(me.interests[0]);

var string1 = 'Ashley';
var string2 = 'Cacoilo';

alert(string1 + ' ' + string2);
