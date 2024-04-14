// Defines a JSON string
const JsonString = '{"Name":"M Fahad","Age":42,"City":"Saddar Karachi"}';

// Parses the JSON string back into a JavaScript object
const Person = JSON.parse(JsonString);

console.log(Person); // Outputs the original object
// This snippet shows how to take a JSON string and convert it back into a JavaScript object.