// check if a number is big
console.log('\n' + 'check if a number is big: ')
function CheckNumberBiggerThanHundred(Number) {
    if (Number > 100) {
        return true
    }
    return false
}


/*
feedback from assignment:
const numberIsBig = function(number) {
    return number > 100;
};
an: number > 100   is "truthy-falsy"

*/


const firstTest = CheckNumberBiggerThanHundred(99);
console.log(firstTest);
const secondTest = CheckNumberBiggerThanHundred(100);
console.log(secondTest);
const thirdTest = CheckNumberBiggerThanHundred(101);
console.log(thirdTest);

console.log('This function returns something')

// Bouncer at a club
console.log('\n' + 'Bouncer at a club: ')
const checkIfClientMayEnterClub = function (currentNumberOfPeopleInClub, maxNumberOfPeopleInClub, ageOfClient) {
    if (currentNumberOfPeopleInClub < maxNumberOfPeopleInClub && ageOfClient > 17) {
        return ('come in');
    }
    else if (currentNumberOfPeopleInClub >= maxNumberOfPeopleInClub) {
        return ("it's too busy now, come back later");
    }
    else {
        return ("this is a club for adults");
    }
}
const pleaseLetMeIn1 = checkIfClientMayEnterClub(99, 100, 20);  //expRes: come in.                   actRes: idem
console.log(pleaseLetMeIn1);
const pleaseLetMeIn2 = checkIfClientMayEnterClub(100, 100, 20);  //expRes: it's too busy (...).      actRes: idem
console.log(pleaseLetMeIn2);
const pleaseLetMeIn3 = checkIfClientMayEnterClub(11, 100, 17);  //expRes: this club is for adults.   actRes: idem
console.log(pleaseLetMeIn3);

console.log('This function returns something: the returned text can e.g. be parsed. If you use console.log instead of return, then it would do something');


/*feedback from Winc:

const getBouncerReaction = function(
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    let response;
    if (ageOfPotentialVisitor < 18) {
        response = "this is a club for adults";
    } else if (currentVisitors >= maxVisitors) {
        response = "it's too busy now, come back later";
    } else {
        response = "come in";
    }
    return response;
};


const getBouncerReaction = function (
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    if (ageOfPotentialVisitor < 18) {
        return "this is a club for adults";
    }

    if (currentVisitors >= maxVisitors) {
        return "it's too busy now, come back later";
    } else {
        return "come in";
    }
};

*/

// Calculating the average
console.log('\n' + 'Calculating the average: ')

const calculateRoundedAverage = function (number1, number2, number3, number4, number5) {
    let sumOfNumbers = number1 + number2 + number3 + number4 + number5;
    let averageOfNumbers = (sumOfNumbers / arguments.length);
    let roundedAverageOfNumbers = Math.round(averageOfNumbers);
    return roundedAverageOfNumbers;
}

const firstCalculatedAverage = calculateRoundedAverage(1, 2, 3, 4, 2);
console.log('firstCalculatedAverage: ' + firstCalculatedAverage);
const secondCalculatedAverage = calculateRoundedAverage(4, 6, 3, 1, 1);
console.log('secondCalculatedAverage: ' + secondCalculatedAverage);
const thirdCalculatedAverage = calculateRoundedAverage(12, 24, 9, 10, 4);
console.log('thirdCalculatedAverage; ' + thirdCalculatedAverage);
console.log('This function returns something');
