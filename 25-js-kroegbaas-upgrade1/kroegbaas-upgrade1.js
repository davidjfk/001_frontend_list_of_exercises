// Deel 1: 50% korting 
console.log("deel 1: 50% korting");
const age = 25;



if (age > 17) {
    console.log("Welcome, please enter and enjoy the party")
}
else {
    console.log("Please stay outside, because you are too young. We apologize for the inconvenience.")
}

if (age > 17 && age < 26) {
    console.log("Je krijgt 50% korting!")
}
else {
    console.log("Drink met mate(n)")
}


// Deel 2: ludieke actie
console.log("deel 2: ludieke actie");
const isFemale = true;



if (isFemale) {
    console.log("Welcome to Ladies Night. Please buy a ticket.")
}
else {
    console.log("Sorry, it is Ladies Night: so you cannot buy a ticket.")
}

const name = 'Sarah';
if (name === 'Bram' || name === 'Sarah') {
    console.log('Gefeliciteerd met je 50ste verjaardag, je krijgt een biertje van ons')
}
else {
    console.log("Drink met mate(n)")
}

// Deel 3: jubileum korting
console.log("deel 3: jubileum korting");
const driverStatus = 'bob';


if (driverStatus === 'bob') {
    console.log("You may drive a vehicle, because you have not drunk any alcohol.")
}
else {
    console.log("You may NOT drive a vehicle, because you have drunk alcohol.")
}

const totalAmount = 110;
if (totalAmount >= 100) {
    console.log("Alstublieft: een gratis fles champagne")
}
else if (totalAmount >= 50) {
    console.log("Alstublieft: een gratis portie nachos")
}
else if (totalAmount >= 25) {
    console.log("Alstublieft: gratis (vega)bitterballen")
}