/* Even Odd Reporter
 Assignement:
Schrijf een loop die "iterate" van 0 tot 20. 
Voor elke loop, check of het huidige nummer even is of oneven (odd).
Console.log het nummer.
*/
for (let i = 0; i < 20; i++) {
    let numberToCheck = i;
    let moduloRemainder = (numberToCheck % 2);

    if (moduloRemainder === 0) {
        console.log(i + ' is even.')
    }
    else {
        console.log(i + ' is oneven.')
    }
}

/*
//winc solution:

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is oneven");
  }
}
//an: winc solution is more concise.
*/