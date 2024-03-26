"use strict";
let laptop = {
    make: "Dell",
    model: "I5 Gen 7",
    year: 2021,
    describe: function () {
        console.log(`Thing LapTop is a ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();
