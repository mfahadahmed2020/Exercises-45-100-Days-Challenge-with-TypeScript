"use strict";
function saveCarInformation(manufacturer, model, ...details) {
    let car = {
        manufacturer: manufacturer,
        model: model,
        details: details
    };
    return car;
}
// Calling the function with required and optional parameters
let carInfo = saveCarInformation("Toyota", "Camry", "Color: Red", "Sunroof: Yes");
console.log(carInfo);
