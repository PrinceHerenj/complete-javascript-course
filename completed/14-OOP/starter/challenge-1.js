const Car = function (str) {
  let [make, , , speed] = str.split(' ');
  make = make.slice(1, make.length - 1);
  this.make = make;
  this.speed = +speed;
  console.log(`Initially '${this.make}' going at ${this.speed} km/h`);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`'${this.make}' going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`'${this.make}' going at ${this.speed} km/h`);
};

const c1 = new Car("'BMW' going at 120 km/h");
for (let i = 0; i < 5; i++) c1.accelerate();
for (let i = 0; i < 5; i++) c1.brake();

const c2 = new Car("'Mercedes' going at 95 km/h");
for (let i = 0; i < 5; i++) c2.accelerate();
for (let i = 0; i < 5; i++) c2.brake();
