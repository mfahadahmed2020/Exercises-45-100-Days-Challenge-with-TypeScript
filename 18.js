"use strict";
let places = ['Karachi', 'Peshawar', 'Quetta', 'Lahore', 'Islamabad'];
console.log('original :' + places);
console.log('copy :' + [...places].sort());
console.log('original :' + places);
console.log('copy :' + [...places].sort().reverse());
