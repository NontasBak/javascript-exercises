const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
    let sum = 0;
	arr.forEach(element => {
        sum += element;
    });

    return sum;
};

const multiply = function() {
    let args = Array.from(arguments);
    let mult = args[0];

    for(let i = 1; i < args.length; i++)
    {
        mult *= args[i];
    }
    
    return mult;
};

const power = function(base, power) {
    result = base;
	for(let i = 1; i < power; i++)
    {
        result *= base;
    }
    return result;
};

const factorial = function(num) {
	let factorial = 1;

    while(num > 1)
    {
        factorial *= num;
        num--;
    }

    return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
