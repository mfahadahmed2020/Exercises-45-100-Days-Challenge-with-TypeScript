"use strict";
function orderSandwich(...items) {
    console.log("Sandwich summary:");
    if (items.length === 0) {
        console.log("No items selected.");
    }
    else {
        console.log("Items: " + items.join(", "));
    }
}
// Calling the function with different number of arguments
orderSandwich("Cheese", "Tomato", "Lettuce");
orderSandwich("Turkey", "Bacon");
orderSandwich();
