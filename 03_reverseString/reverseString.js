const reverseString = function(string) {
    let returnedString = "";
    for (i = string.length-1; i >= 0; i--) {
        returnedString += string[i];
    }
    return returnedString;
};

// Do not edit below this line
module.exports = reverseString;
