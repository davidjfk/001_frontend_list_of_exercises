// Utility functions
const isNotNull = str => (str !== null ? true : false);
// winc: 

const hasRightLength = str => {
    if (str == null) {
        return false
    } else {
        return (str.length < 9 ? true : false)
    }
}
const hasUpperCaseCharacter = str => {
    if (str == null) {
        return false
    } else {
        const pattern = new RegExp(/[A-Z]+/);
        // if pattern not in string, then null is returned. null is a falsy value.
        console.log(pattern.test(str))
        return (pattern.test(str) ? true : false)
    }
}

const hasLowerCaseCharacter = str => {
    if (str == null) {
        return false
    } else {
        const pattern = new RegExp(/[a-z]+/);
        // if pattern not in string, then null is returned. null is a falsy value. 
        console.log(pattern.test(str))
        return (pattern.test(str) ? true : false)
    }

}


const hasDigit = str => {
    if (str == null) {
        return false
    } else {
        const pattern = new RegExp(/[0-9]+/);
        // if pattern not in string, then null is returned. null is a falsy value. 
        console.log(pattern.test(str))
        return (pattern.test(str) ? true : false)
    }
}

// winc-answers: 
// const isNotNull = str => str !== null;

// const hasRightLength = str => isNotNull(str) && str.length <= 8;

// const hasUpperCaseCharacter = str =>
//     isNotNull(str) && str.toLowerCase() !== str;

// const hasLowerCaseCharacter = str =>
//     isNotNull(str) && str.toUpperCase() !== str;

// const hasDigit = str => /\d/.test(str);

const minimumConditionsReached = conditions => {
    //conditions is an array of booleans
    const trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password),
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
};