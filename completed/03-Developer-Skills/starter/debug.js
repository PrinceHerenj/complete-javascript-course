const measureKelvin = function () {
  const measurement = {
    type: `temp`,
    unit: `celsius`,
    value: Number(prompt(`Degress celsius`)),
  };
  const kelvin = measurement.value + 273;
  debugger;
  return kelvin;
};

console.log(measureKelvin());
