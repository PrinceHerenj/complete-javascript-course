const calcTip = bill => {
    if (bill >= 50 && bill <= 300) {
        return 0.15 * bill
    } else {
        return 0.2 * bill
    }
}

const bills = [125, 555, 44]
const tips = [], total = []
bills.forEach(pusher)

function pusher(x) {
    tips.push(calcTip(x))
}

for (let index = 0; index < bills.length; index++) {
    total[index] = bills[index] + tips[index]
}

total