const sumAll = function(firstInt, secondInt) {
    if (firstInt < 0 || 
        secondInt < 0 || 
        Number(firstInt) !== firstInt || 
        Number(secondInt) !== secondInt ||
        firstInt % 1 !== 0 ||
        secondInt % 1 !== 0) {
        return "ERROR";
    }
    let sum = 0;
    let largerInt = (firstInt > secondInt) ? firstInt : secondInt;
    let smallerInt = (firstInt < secondInt) ? firstInt : secondInt;
    for (let i = smallerInt; i <= largerInt; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
