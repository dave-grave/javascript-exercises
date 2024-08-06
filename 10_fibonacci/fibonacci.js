const fibonacci = function(nthNum) {
    let f_0 = 0;
    let f_1 = 1;
    for (let i = 0; i < nthNum; i++) {
        if (i % 2 === 0) {
            f_0 += f_1;
        } else {
            f_1 += f_0; 
        }
    }
    if (nthNum < 0) {
        return "OOPS";}
    else if (nthNum % 2 === 0) 
        {return f_0;}
    else 
        {return f_1};
};

// Do not edit below this line
module.exports = fibonacci;
