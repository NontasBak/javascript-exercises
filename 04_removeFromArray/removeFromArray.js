const removeFromArray = function(array) {
    let args = Array.from(arguments)
    args.shift();

    for(i = 0; i < args.length; i++)
    {
        let index = array.indexOf(args[i]);
        if (index > -1)
        {
            array.splice(index, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
