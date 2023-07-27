const findTheOldest = function(arr) {
    oldestPersonIndex = 0;
    let age = 0;
    let oldestAge = 0;
    arr.forEach((person, index) => {
        if(person.yearOfDeath === undefined)
            age = (new Date().getFullYear()) - person.yearOfBirth;
        else
            age = person.yearOfDeath - person.yearOfBirth;

        if(age > oldestAge)
        {
            oldestPersonIndex = index;
            oldestAge = age;
        }
    })

    return arr[oldestPersonIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
