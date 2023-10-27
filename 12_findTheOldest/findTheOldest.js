const findTheOldest = function(peoples) {
    if(!peoples.yearOfDeath){
        peoples.yearOfDeath = 2023;
    }

    peoples.sort((a,b) =>{
        if(!a.yearOfDeath){
            a.yearOfDeath = 2023;
        };
        if(!b.yearOfDeath){
            b.yearOfDeath = 2023;
        };
        const a_lived = a.yearOfDeath - a.yearOfBirth;
        const b_lived = b.yearOfDeath - b.yearOfBirth;
        return a_lived - b_lived;
    });
    return peoples[peoples.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
