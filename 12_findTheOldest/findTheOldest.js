const findTheOldest = function(arr) {
    for (let item of arr) {
        if (item.yearOfDeath === undefined) {
            item.yearOfDeath = 2024;
        }
    }
    arr.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth));
    return arr[arr.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
