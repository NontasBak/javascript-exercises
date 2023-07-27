const fibonacci = function(index) {
    if(index < 1)
        return "OOPS";
    
    num = 1;
    add = 1;
    for(let i = 2; i < index; i++)
    {
        let temp = num;
        num = num + add;
        add = temp;
    }

    return num;
};

// Do not edit below this line
module.exports = fibonacci;
