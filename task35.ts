// List of animals
const animals = ['dog', 'cat', 'rabbit'];

// Printing each animal's name
console.log("Animals:");
for (let animal of animals) {
    console.log(animal);
}

// Printing a statement about each animal
console.log("\nStatements about each animal:");
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

// Printing what these animals have in common
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");