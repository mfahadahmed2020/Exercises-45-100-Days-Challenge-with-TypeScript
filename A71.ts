// Example with let and const
let age = 30;
age = 35; // Works fine because let allows reassignment
console.log("Age:", age);

const myName = "John";
try {
     "Doe"; // This line will cause an error
} catch (error) {
    console.log("Error: Can't reassign a const-declared variable."); // This message is shown
}
console.log("Name:");