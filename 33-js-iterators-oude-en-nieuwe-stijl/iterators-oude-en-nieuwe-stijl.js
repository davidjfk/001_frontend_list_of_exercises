
//oude stijl: loops
const colors = ['yellow', 'blue', 'red', 'orange'];
let index = 0;
while (index < colors.length) {
    console.log(colors[index], '\n');
    index++;
}

for (i = 0; i < colors.length; i++) {
    console.log(colors[i], '\n');
}

//Nieuwe stijl: array methods
colors.forEach(color => console.log(color));
console.log('\n Answer 1: ');
console.log('While loopt neemt 5 regels in beslag en de for loop 3 regels. ');
console.log('\n Answer 2: ');
console.log('ForEach neemt 1 regel in beslag. ');
console.log('\n Answer 3: ');
console.log('ForEach geeft de betekenis aan en helpt zo mee om  je code meer self-descriptive te maken. Dit in tegenstelling tot een for of while loop. ');

/*
Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
*/

const object = { a: 1, b: 2, c: 3, d: 4, e: 5 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}

console.log('\n Answer 4: ');
console.log('Ja, je bent nu aan het itereren. ');