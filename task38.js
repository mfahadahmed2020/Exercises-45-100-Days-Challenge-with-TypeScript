"use strict";
let describeCity = function (city, country = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
};
// Calling the function for three different cities
describeCity("Karachi");
describeCity("New York", "USA");
describeCity("London", "UK");
