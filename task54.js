"use strict";
// A way to make a flexible list
function createObjectWithDynamicKey(A, value) {
    let dynamicObject = { A };
    // Setting up a section in the list with a changeable name
    dynamicObject;
    {
        A;
    }
    value;
    return dynamicObject;
}
// Using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("theme", "dark");
// Showing the user's choice
console.log(userPreference);
