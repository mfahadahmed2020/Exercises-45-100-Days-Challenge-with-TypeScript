let cars: string = 'Subaru'

// Test 1: Equality Comparison (True)
console.log("Is Car == 'Subaru'? I Predict True.");
console.log(cars =='Subaru'); // True

// Test 2: Strict Equality Comparison (True)
console.log("Is Cars === 'Subaru'? Predict True");
console.log(cars === 'Subaru'); // True

// Test 3: InEquality Comparison (False)
console.log("Is Car != 'Subaru'? I Predict False");
console.log(cars != 'Subaru'); // False

// Test 4:  Strict InEquality Comparison  (False)
console.log("Is car !== 'Subaru'? I Predict False");
console.log(cars !== 'Subaru'); // False

// Test 5: Less Than Comparison (False)
console.log("Is car < 'Subaru'? I Predict False");
console.log(cars < 'Subaru'); // False (Lexicographic Comparison)