let massMark, massJohn, heightMark, heightJohn;

// // dataset one
// massMark = 78;
// heightMark = 1.69;
// massJohn = 92;
// heightJohn = 1.76;

// dataset two
massMark = 95
heightMark = 1.88
massJohn = 85
heightJohn = 1.76

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;

let markHigherBMI = bmiMark > bmiJohn;

if(markHigherBMI) console.log(`Mark's BMI (${bmiMark})  is higher than John's (${bmiJohn})`);
else console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`)

