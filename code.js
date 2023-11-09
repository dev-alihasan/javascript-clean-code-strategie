// use clean names

// not good 
let a = 21; //what's a ?

// good code
let age = 21; //Describes what age means



/*******short and focused function***********/

// Not good:
function startCarAndDriveToDestination() {
    // too many things happening
}

// Good:
function startCar() {
    // Does one clear thing
}

function driveToDestination() {
    // Does another clear thing
}
/*********************************** */


/*******avoid global variables***********/

// Not good:
let userName = 'Arnob'; // Global for everyone

// Good:
function greetUser(name) {
    // Name is only known here
}
/**************************************** */



/*******use Descriptive Name***********/

// Not good:
let temp = 32; // what does temp mean?

// Good:
let temperatureInCelsius = 32; // Describes clearly what it's
/*************************************************************** */