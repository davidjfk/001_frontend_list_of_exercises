console.log("40-js-Array methods - deel 1. David Sneek")
console.log(`vraag A: `)

let arrayWords = ["nice", "awesome", "tof"];
const addTheWordCool = function(array){
  array.push("cool");
  return array;
}
console.log("Add cool:", addTheWordCool(arrayWords));
// resultaat: ["nice", "awesome", "tof", "cool"]

 
console.log(`vraag B: `)
let amountOfElementsInArray = (array) => {
  let arrayLength = array.length;
  console.log(arrayLength);
}
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
// 3


console.log(`vraag C: `)

//immutable:
let selectBelgiumFromBenelux = (array) => {
  return array[0];
}
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie" 

//mutable:
let selectBelgiumFromBenelux2 = (array) => {
  return array.shift()
}
console.log(selectBelgiumFromBenelux2(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie" 


console.log(`vraag D: `)

// immutable: 
let lastElementInArray = (array) => {
  return array[array.length - 1];
}
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"

// mutable: 
let lastElementInArray2 = (array) => {
  return array.pop()
}
console.log(lastElementInArray2(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"


console.log(`vraag E: `)

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
const impeachTrumpSlice = function(array) {
  return array.slice(1, array.length)
}
const impeachTrumpSplice = function(array) {
  return array.splice(1, array.length)     
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log("slice does not mutate the array presidents")
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log("splice does mutate the array presidents")

console.log(`vraag F: `)

let stringsTogether = (array) => {
  return array.join(' ')
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"

console.log(`vraag G: `)

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// merge array2 into array1
let combineArrays = (array1, array2) => {
  array1.push(...array2);
  return array1;
}
console.log(combineArrays(array1, array2));
// resultaat: [1,2,3,4,5,6]

let array4 = [1, 2, 3];
let array5 = [4, 5, 6];

// merge array2 and array1 into new array3
let combineArrays2 = (array4, array5) => {
  let array6 = [...array4, ...array5];
  return array6;
}
console.log(combineArrays2(array4, array5));
// resultaat: [1,2,3,4,5,6]