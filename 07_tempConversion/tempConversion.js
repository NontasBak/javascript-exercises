const convertToCelsius = function(fahreneit) {
	let celcius = (fahreneit - 32) * 5/9;
	celcius = Math.round(celcius * 10) / 10;

	return celcius;
};

const convertToFahrenheit = function(celcius) {
	let fahreneit = celcius * (9/5) + 32;
	fahreneit = Math.round(fahreneit * 10) / 10;

	return fahreneit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
