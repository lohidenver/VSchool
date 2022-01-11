//constructors build objects

//"new" - instantiate a new object

function Car(make, model, year, honkSound, seats) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.honkSound = honkSound;
  this.seats = seats;
}

var jeep = new Car("Jeep", "Cherokee", 1995, "beep", 5);
var mazda = new Car("Mazda", "3", 2015, "boop", 6);

Car.prototype.seats = function () {
  console.log(this.seats);
};

console.log(jeep);
console.log(mazda);
