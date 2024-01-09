//function declaration:
function calcWithFunctionDeclaration(number1, number2) {
    const squareOfNumber1 = (number1 * number1);
    const squareOfNumber2 = (number2 * number2);
    const additionOfSquaredNumbers = (squareOfNumber1 + squareOfNumber2);
    const squareOfAddedSquareNumbers = (additionOfSquaredNumbers * additionOfSquaredNumbers);
    return squareOfAddedSquareNumbers;
}

const resultOfFunctionDeclaration = calcWithFunctionDeclaration(3, 4);
console.log('\n' + 'calcWithFunctionDeclaration: ' + resultOfFunctionDeclaration);


//function expression:
const calcWithFunctionExpression = function (number1, number2) {
    const squareOfNumber1 = (number1 * number1);
    const squareOfNumber2 = (number2 * number2);
    const additionOfSquaredNumbers = (squareOfNumber1 + squareOfNumber2);
    const squareOfAddedSquareNumbers = (additionOfSquaredNumbers * additionOfSquaredNumbers);
    return squareOfAddedSquareNumbers;
};

const resultOfFunctionExpression = calcWithFunctionExpression(3, 4);
console.log('\n' + 'calcWithFunctionExpression: ' + resultOfFunctionExpression);


//function arrow:
const calcWithFunctionArrow = (number1, number2) => {
    const squareOfNumber1 = (number1 * number1);
    const squareOfNumber2 = (number2 * number2);
    const additionOfSquaredNumbers = (squareOfNumber1 + squareOfNumber2);
    const squareOfAddedSquareNumbers = (additionOfSquaredNumbers * additionOfSquaredNumbers);
    return squareOfAddedSquareNumbers;
};

const resultOfFunctionArrow = calcWithFunctionArrow(3, 4);
console.log('\n' + 'calcWithFunctionArrow: ' + resultOfFunctionArrow);