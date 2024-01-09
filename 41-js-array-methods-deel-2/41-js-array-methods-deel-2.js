console.log("41-js-Array methods - deel 2. David Sneek")
console.log(`vraag A: `)


const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
    // Hier komt jouw functie
    
let findSpiderMan = (superheroes) => {
    let selectedSuperhero = superheroes.find((hero) => hero.name === "Spiderman");
    return selectedSuperhero;
}
console.log(findSpiderMan(superheroes)) 
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

 
console.log(`vraag B: `)
let array1 = [1, 2, 3];

let doubleArrayValues = (array) => {
    let doubledArray = array.map((arrayElement) => arrayElement * 2);
    return doubledArray;
}

console.log(doubleArrayValues(array1));
// result should be [2, 4, 6]


console.log(`vraag C: `)

let array2 = [1, 4, 3, 6, 9, 7, 11];
let array3 = [1, 2, 1, 2, 1, 2];

let containsNumberBiggerThan10 = (array) => {
    const isBiggerThan10 = array.some(element => element > 10);
    return isBiggerThan10;  
}

console.log(containsNumberBiggerThan10(array2));
// result should be true

console.log(containsNumberBiggerThan10(array3));
// result should be false


console.log(`vraag D: `)
let array4 = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];

let isItalyInTheGreat7 = (string) => {
    return string.includes("Italy");
}

console.log(isItalyInTheGreat7(array4));
// result should be true

console.log(`vraag E: `)

let array5 = [1, 4, 3, 6, 9, 7, 11];

let tenfold = (array) => {
    let arrayNew = [];
    array.forEach( (element, index, array) => {  
        array[index] = element * 10;
        arrayNew.push(array[index]);    
    });
    return arrayNew;
}

console.log(tenfold(array5));
// result should be [10, 40, 30, 60, 90, 70, 110]


console.log(`vraag F: `)

let array6 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];

let isBelow100 = (array) => {
    const isSmallerThan100 = array.every(element => element < 100);
    return isSmallerThan100;  
}

console.log(isBelow100(array6))
// result should be: false

console.log(`vraag G: `)

let array7 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

let bigSum = (array) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let reducedArray = array.reduce(reducer);
    return reducedArray;
}

console.log(bigSum(array7))
// result should be 1118