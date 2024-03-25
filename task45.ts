interface Car {
    manufacturer: string;
    model: string;
    details: string[];
}

function saveCarInformation(manufacturer: string, model: string, ...details: string[]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        model: model,
        details: details
    };
    return car;
}

// Calling the function with required and optional parameters
let carInfo: Car = saveCarInformation("Toyota", "Camry", "Color: Red", "Sunroof: Yes");
console.log(carInfo);