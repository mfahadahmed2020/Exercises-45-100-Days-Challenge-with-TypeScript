let magicians = ["Harry Houdini", "David Blaine", "Penn & Teller", "Dynamo"];

function showMagicians() {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat() {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "Great " + magicians[i];
    }
}

// Call makeGreat function to modify magicians array
makeGreat();

// Call the function to display magicians
showMagicians();