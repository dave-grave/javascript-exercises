const removeFromArray = function(arr, ...args) {
    for (const numToRemove of args) {
        while (arr.indexOf(numToRemove) !== -1) {
            arrLeft = arr.slice(0, arr.indexOf(numToRemove));
            arrRight = arr.slice(arr.indexOf(numToRemove)+1);
            arr = arrLeft.concat(arrRight);
        }
    }      
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
