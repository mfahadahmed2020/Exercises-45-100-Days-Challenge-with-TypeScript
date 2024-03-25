"use strict";
let make_shirt = (size = "large") => {
    let default_message = "I love Target Wall Mart Fashion Accessories";
    if (size === "large") {
        console.log('Shirt Size: Large');
        console.log(`Message: ${default_message}`);
    }
    else {
        console.log(`Shirt Size: ${size}`);
        console.log(`Message: ${default_message}`);
    }
};
// Make a large shirt
make_shirt();
// Make a medium shirt
make_shirt("medium");
// Make a shirt of different size
make_shirt("small");
