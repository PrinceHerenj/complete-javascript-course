// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!

`use strict`;

function printForecast(arr) {
  let str = ``;
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} in ${i + 1} days ... `;
  }
  str = `... ` + str;
  console.log(str);
}

printForecast([17, 21, 23]);
