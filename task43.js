"use strict";
let magicians = ["Harry Houdini", "David Blaine", "Penn & Teller", "Dynamo"];
function showMagicians(magiciansArray) {
    for (let magician of magiciansArray) {
        console.log(magician);
    }
}
function makeGreat(magiciansArray) {
    let newMagiciansArray = [];
    for (let magician of magiciansArray) {
        newMagiciansArray.push("Great " + magician);
    }
    return newMagiciansArray;
}
// Call makeGreat function with a copy of magicians array
let newMagiciansArray = makeGreat([...magicians]);
// Call the function to display magicians with and without "Great"
console.log("Original Magicians:");
showMagicians(magicians);
console.log("\nMagicians with 'Great' added:");
showMagicians(newMagiciansArray);
