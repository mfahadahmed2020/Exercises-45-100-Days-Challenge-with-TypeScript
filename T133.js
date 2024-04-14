"use strict";
// Defines a JavaScript object
const Person = {
    Name: "M Fahad",
    Age: 42,
    City: "Saddar Karachi",
};
// Converts the object into a JSON string
const JsonString = JSON.stringify(Person);
console.log(JsonString); // Outputs: {"name":"Alice","age":30,"city":"Wonderland"}
// Demonstrates converting an object to a JSON string, making it easy to store or transmit.
