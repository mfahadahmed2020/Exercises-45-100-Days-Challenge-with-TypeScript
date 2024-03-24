"use strict";
let guest_list = ['Ali', 'Farhan', 'Raza', 'Ayesha'];
let not_present = ['Farhan'];
let new_guest = ['Babar Azam'];
guest_list[1] = new_guest[0];
guest_list.unshift('Shaheen', 'Sarfaraz', 'Rizwan');
console.log('\nUnfortunately We Can Not Arrange Big Table , Only Two People Allow.');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam. ${remove_guest} you are not invited for dinner.`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + '\nYes You Are Still Invited on Tomorrw Dinner\nThank You\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
