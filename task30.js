"use strict";
let users = ['Sana', 'Fahad', 'Saba', 'Babar', 'Admin'];
for (let user of users) {
    if (user === "admin") {
        console.log("Hello Admin, Would You Like to See a Status Report?");
    }
    else {
        console.log(`Hello ${user}, Thank You for Logging in again.`);
    }
}
