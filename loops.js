// Array of zoo animals.
var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl"];

// Loops through the array to print each zoo animal.

// prints every element of the arrary forward
for (let i = 0; i < 4; i++) {
  //console.log(zooAnimals[i]);
}

//Challenege print eveything in the array in the backards order
for (let i = zooAnimals.length - 1; i > -1; i--) {
  console.log(zooAnimals[i]);
}
//--------------------------------------------

// Loops from 0 to 4.

//----------------------------------------

// This is our starting myFarm array.
var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

// Creating a variable to hold our array length.
let myFarmLength = myFarm.length;
// Looping through our myFarm array.

// Console out the farm animal in the current index.

// If the first character in the current animal is "c" or "o", alert the following message.

// Arrays can store functions and then we can loop through those functions.

function sayHello() {
  console.log("Hello");
}

function askAnything() {
  console.log("How is your day going?");
}

function sayGoodBye() {
  console.log("Goodbye!");
}

//Looping though objects

var moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 },
];

function loopThroughArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${array[i].name} is old enough ${array[i].age >= 17}`);
  }
}

loopThroughArray(moviePatrons);

//Review: Ask for questions or if anyone wants to see one of these problems again.
