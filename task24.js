"use strict";
let car = 'Subaru';
let age = 25;
let numbers = [1, 2, 3, 4];
// **String Tests**
// Test 1: Equality (True)
console.log("Is car == 'Subaru'? I Predict True.");
console.log(car == 'Subaru'); // True (case-Sensitive)
// Test 2: String Equality (False)
console.log("Is car === 'Subaru'? I Predict False.");
console.log(car === 'Subaru'); // False (case-Sensitive)
// Test 3: InEquality (True)
console.log("Is car != 'Toyota'? I Predict True");
console.log(car != 'Toyota'); // True
// Test 4: InEquality (False)
console.log("Is car !== 'Subaru'? I Predict False.");
console.log(car !== 'Subaru'); // False (case-Sensitive)
// **Lower Case Function Tests**
// Test 5: Lower Case Conversion (True)
console.log("Is car.tolowercase() == 'Subaru'? I Predict True.");
console.log(car.toLowerCase() == 'Subaru'); //True (Converted to Lower Case)
// Test 6: Lower Case Conversion (False)
console.log("Is car === car.tolowercase()? I Predict True.");
console.log(car === car.toLowerCase()); //True (Converted to Lower Case)
//**Numerical Tests**
// Test 7: Equality (True)
console.log("Is Age == 25? I Predict True.");
console.log(age == 25); // True
// Test 8: InEquality (False)
console.log("Is Age != 30? I Predict False.");
console.log(age != 30); // False
// Test 9: Greater Than (False)
console.log("Is Age > 30? I Predict False.");
console.log(age > 30); // False
// Test 10: Less Than or Equal (True)
console.log("Is Age <= 25? I Predict True.");
console.log(age <= 25); // True
// **Logical Operator**
// Test 11: And (True)
console.log("Is Age > 20 && Age <30? I Predict True.");
console.log(age > 20 && age < 30); // True (Both Conditions Met)
// Test 12: OR (False)
console.log("Is Age > 30 || Age < 18? I Predict False.");
console.log(age > 30 || age < 18); // False (Neither Condition Met)
// **Array Tests**
// Test 13: In Array (True)
console.log("Is 3 in numbers? I Predict True.");
console.log(3 in numbers); // True (Checks for Index Existence)
// Test 14: Array (False)
console.log("Is 5 not in numbers? I Predict False.");
console.log(5 in numbers); // False (Negation of "in" Operator)
