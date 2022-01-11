console.log("connected")

// Constructor Functions - blueprint 

// function Car(make, model) {
//     this.make = make;
//     this.model = model;
//     // this.honk = function() {
//     //     console.log("honk")
//     // }
// }

// What do cars "Do"
// Car.prototype.honk = function() {
//     console.log("beep")
// }

// // instantiate
// const jeep = new Car("Jeep", "Wrangler");
// const mr2 = new Car("Toyota", "MR2");

// console.log(jeep);
// console.log(mr2);

// jeep.honk();


// ES6 Classes

class Vehicle {
    constructor(make, model, honkSound) {
        this.make = make;
        this.model = model;
        this.honkSound = honkSound;
    }

    honk() {
        console.log(this.honkSound);
    }

    drive() {
        console.log("vroom");
    }


}

class Motorcycle extends Vehicle {
    constructor(make, model, honkSound, hasSideCar) {
        super(make, model, honkSound);
        this.hasSideCar = hasSideCar;
    }
}


const tacoma = new Vehicle("Toyota", "Tacoma", "boooop");

const harley = new Motorcycle("Harley Davidson", "LiveWire", "beeeep", true)




console.log(tacoma)
tacoma.honk();
harley.honk();