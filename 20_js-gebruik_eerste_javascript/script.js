
// vraag 4:
console.log("Hello Winc Academy");

// vraag 5:
console.log("question 5: answers:")
let voornaamCursist = "David";
console.log(voornaamCursist);

// vraag 6: 
// let is een reserved keyword en mag daarom niet als variabele-naam gebruikt worden. 

// vraag 7:
console.log("question 7: answers:")
let additionResultIntegers = (2 + 2);
console.log(additionResultIntegers);

let additionResultStrings = ("2" + "2");
console.log(additionResultStrings);
// "2" + "2" = "22". That means that the 2 strings have been concatenated.

// vraag 8: 

console.log("question 8: answers:")

console.log(8 + 87);

const addTwoNumbers = (number1, number2) => { console.log(number1 + number2) };
addTwoNumbers(5, 2);

const substractTwoNumbers = (number1, number2) => { console.log(number1 - number2) };
substractTwoNumbers(5, 2);


const multiplyTwoNumbers = (number1, number2) => { return (number1 * number2) };
let multiplyResult = multiplyTwoNumbers(5, 2);
console.log(multiplyResult);


// without body brackets
const divideTwoNumbers2 = (number1, number2) => console.log(number1 / number2);
divideTwoNumbers2(5, 2);

//without bodybrackets, and console.log removed from the function
const modulusTwoNumbers = (number1, number2) => number1 % number2
let modulusResult = modulusTwoNumbers(5, 2);
console.log(modulusResult);

// question 9:
console.log("question 9: answers:")
let studentAge = 45;
console.log((typeof (studentAge)));

studentAge = '45';
console.log((typeof (studentAge)));