const sumAll = function(start, end) {
    let sum = 0;

    if(isNaN(start) || isNaN(end) || start < 0 || end < 0
        || Number(start) !== start || Number(end) !== end)
            return "ERROR";
        
    if(start > end)
    {
        temp = start;
        start = end;
        end = temp;
    }

    for(let i = start; i <= end; i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
