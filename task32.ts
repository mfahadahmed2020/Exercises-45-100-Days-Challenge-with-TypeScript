// List of current users
const currentUsers = ['john', 'mary', 'jane', 'alex', 'sarah'];
// List of new users
const newUsers = ['steve', 'jane', 'JOhn', 'emily', 'peter'];
// Convert current users list to lowercase for case-insensitive comparison
let currentUsersLower = currentUsers.map(user => user.toLowerCase());
// Check if each new username is already taken
newUsers.forEach(user => {
    let isTaken = false;
    let newUserLower = user.toLowerCase();
    
    currentUsersLower.forEach(existingUser => {
        if (existingUser === newUserLower) {
            isTaken = true;
        }
    });

    if (isTaken) {
        console.log(`The username '${user}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${user}' is available.`);
    }
});