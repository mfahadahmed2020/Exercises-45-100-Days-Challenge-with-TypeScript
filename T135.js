"use strict";
// Reusing the Person object from Question 133
const person = {
    Name: "M Fahad",
    Age: 42,
    City: "Saddar Karachi",
};
// Converts the object into a JSON string with indentation
const jsonString = JSON.stringify(person, null, 2); // The '2' specifies the number of spaces to use as white space
console.log(jsonString);
/* Outputs:
{
  "Name": "M Fahad",
  "Age": 42,
  "City": "Saddar Karachi"
}
*/
// Shows how adding indentation to the JSON string makes it easier to read.
