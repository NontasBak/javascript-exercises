const palindromes = function (str) {
    str = str.toLowerCase();
    let arr = str.split("");

    let filteredArray = arr.filter(item =>
        (item === " " || item === "," || item === "." || item === "!") ? false : true);

    let isPalindrome = true;
    filteredArray.forEach((item, index) => {
        if(item !== filteredArray[filteredArray.length - 1 - index])
            isPalindrome = false;
    })

    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
