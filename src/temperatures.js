convertF = (temp, mode) => {
  if (mode == "c") {
    returntmp = (temp - 32) * math.fraction('5/9'); 
  }
  if (mode == "k" {
    returntmp = (temp + 459.67) * math.fraction('5/9');
  }
  return returntmp;
};

convertC = (temp, mode) => {
  if (mode == "f"){
    returntmp = (temp * math.fraction('9/5')) + 32;
  }
  if (mode == "k"){
    returntmp = temp + 273.15
  }
  return returntmp;
};

module.exports = {
  Fahrenheit: convertF,
  Celsius: convertC
}
