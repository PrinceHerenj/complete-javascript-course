const mark = {
    fullname: `Mark Miller`,
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2
        return this.BMI
    }
}

const john = {
    fullname: `John Smith`,
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2
        return this.BMI
    }
}

const toTwo = number => Math.round(number * 100) / 100
mark.calcBMI();john.calcBMI()
console.log(`${mark.fullname}'s BMI (${toTwo(mark.BMI)}) is ${mark.BMI >= john.BMI ? `higher`: `lower`} than ${john.fullname}'s BMI (${toTwo(john.BMI)})`)
