"use strict";
// Defines a function that accepts multiple hobbies as arguments
function logHobbies(...hobbies) {
    // Loops through each hobby in the array
    hobbies.forEach((hobby) => {
        // Logs a statement for each hobby
        console.log(`I Enjoy ${hobby}.`);
    });
}
// Calls the function with three hobbies
logHobbies("Reading", "Coding", "Cycling");
