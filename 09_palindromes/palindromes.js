const palindromes = function (string) {
    let prohibitedChars = [',', '.', '!', ' '];
    let normalString = string.toLowerCase()
                             .split('')
                             .filter((item) => !prohibitedChars.includes(item))
                             .join('');

    let reversedString = string.toLowerCase()
                               .split('')
                               .filter((item) => !prohibitedChars.includes(item))
                               .reverse()
                               .join('');
    return normalString === reversedString;
                 
};

// Do not edit below this line
module.exports = palindromes;
