class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = +speed;
    console.log(`Initially '${this.make}' going at ${this.speed} km/h`);
  }

  accelerate() {
    this.speed += 10;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  }

  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const c1 = new CarCl("'Ford' going at 120 km/h");
c1.speedUS = 30;
console.log(c1, c1.speedUS);
