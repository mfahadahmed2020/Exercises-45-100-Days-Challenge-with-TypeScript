"use strict";
// Exercise 15
let guest_list = ['Ali', 'Farhan', 'Raza', 'Ayesha'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + '\n', 'We Invited You on Dinner Tomorrow.\n\nThank You');
}
let not_present = ['Farhan'];
let new_guest = ['Babar Azam'];
guest_list[1] = new_guest[0];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + '\n', 'We Invited You on Dinner Tomorrow.\nThank You\n');
}
console.log('Mr. Farhan Will Not Be Coming Tomorrow Dinner.');
