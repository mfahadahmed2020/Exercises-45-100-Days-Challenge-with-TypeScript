let describeCity = function(city: string, country: string = 'Pakistan'){
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describeCity("Karachi");
describeCity("New York", "USA");
describeCity("London", "UK");