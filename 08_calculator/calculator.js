const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  return nums.reduce((sum, item) => sum + item, 0);
};

const multiply = function(nums) {
  return nums.reduce((factorial, item) => factorial * item, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	product = 1;
  for (let i=0; i < a; i++) {
    product *= i + 1;
  }
  return product;
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
