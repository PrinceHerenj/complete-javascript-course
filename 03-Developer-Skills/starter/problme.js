const temp = [-3, -11, -2, 1, `error`, 20, 14, 10];

// Calculate the temp amplitude: Difference between lowest and highest temps
// Break into smaller sub problems.

// Ignore errors
// Find min and max of temp array
// Substract min from max and return it.

const calcTempAmplitude = temp => {
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    let curVal = temp[i];
    if (typeof curVal !== `number`) continue;
    if (curVal > max) max = curVal;
    if (curVal < min) min = curVal;
  }
  console.log(max);
  console.log(min);
  return max - min;
};

console.log(calcTempAmplitude(temp));
