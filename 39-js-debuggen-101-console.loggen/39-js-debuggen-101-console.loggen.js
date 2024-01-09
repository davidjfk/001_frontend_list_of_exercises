console.log("39-js-debuggen-101-console-loggen. David Sneek")
const persons = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
console.log(`vraag 1: `)
  for (let person of persons) {
    console.log(`Dit is de gehele persoon: ${JSON.stringify(person)}`)
  }

console.log(`vraag 2: `)
  for (let person of persons) {
    console.log(`Dit is de naam: ${JSON.stringify(person.name)}`)
  }
console.log(`vraag 3: `)
let calculateCurrentYear = () => {
    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    return currentYear;
}

let currentYear = calculateCurrentYear()
let displayBirthYearOfPerson = (currentYear, age) => currentYear - age

for (let person of persons) {
    console.log(`Geboortejaar van ${JSON.stringify(person.name)} is ${JSON.stringify(displayBirthYearOfPerson(currentYear, person.age))}.`)
}
console.log(`vraag 4: `)
   for (let person of persons) {
    console.log(`${JSON.stringify(person.name)} is een ${JSON.stringify(person.profession)}.`)
  }
console.log(`vraag 5: `)
   for (let person of persons) {
       console.log(`${JSON.stringify(person.name)} is een ${JSON.stringify(person.profession)}.`)
       let personAge = person.age > 50 ? "Je bent ouder dan 50." : "je bent 50 jaar of jonger."
       console.log(personAge);
       
}