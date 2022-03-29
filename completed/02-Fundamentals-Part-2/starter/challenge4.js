const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = [], totals = []

const calcTip = bill => {
    if (bill >= 50 && bill <= 300) {
        return 0.15 * bill
    } else {
        return 0.2 * bill
    }
}

for(let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i])
    totals[i] = tips[i] + bills[i]
}

tips
totals

const calcAverage = function(arr) {
    let sum = 0 
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

console.log(calcAverage(totals))