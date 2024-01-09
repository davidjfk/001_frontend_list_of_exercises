const guessTheNumber = function(){
  
  /* 
  Goal: Play/start this game/function with syntax: guessTheNumber() from a button in an html page. 
  This function guessTheNumber contains 2 parts:
  1. list of functions.
  2. list of function calls.
     Remark 1: the game loop is inside function 'playGameRounds'.
  */
  
  //PART 1 of 2: list of functions:
  // Requirement 1, 2: 
  const askUserName = function (){
    let naamVanSpeler = prompt("Welkom! Wat is je naam?", "");
    return naamVanSpeler;
  }
  
  // Requirement 3:
  const displayUserName = function (naamVanSpeler) {
    alert(`Hey ${naamVanSpeler}.`);
  }

   // Requirement 4, 6:
  const askForNumber = function (){
    let stringEnteredByPlayer = prompt('Doe een gok en voer een nummer in', "");
    let numberEnteredByPlayer = parseInt(stringEnteredByPlayer);
    return numberEnteredByPlayer;
  }
  
  // Requirement 5: (replaced by bonus requirement, so this can be removed)
  // const getRandomInt = function(max){
  //   const winningNumber = Math.floor(Math.random() * Math.floor(max));
  //   return winningNumber;
  // };

  // Requirement: Bonus: user selects the range within which to select a number
  //source of this function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 
  const getRandomIntBetweenTwoValuesInclusive = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  
  const askMinimumValueToDelimitGuessingRange = function (){
    let stringEnteredByPlayer = prompt("Kies de minimumwaarde van de range waarbinnen je het getal gaat raden. Dus bijv. 3 betekent dat het te raden getal minimaal 3 is.", "");
    let numberEnteredByPlayer = parseInt(stringEnteredByPlayer);
    return numberEnteredByPlayer;
  }

  const askMaximumValueToDelimitGuessingRange = function (){
    let stringEnteredByPlayer = prompt("Kies de maximumwaarde van de range waarbinnen je het getal gaat raden. Dus bijv. 15 betekent dat het te raden getal maximaal 15 is.", "");
    let numberEnteredByPlayer = parseInt(stringEnteredByPlayer);
    return numberEnteredByPlayer;
  }

  // Requirement 7, 8:
  const isGuessOfPlayerCorrect = function(winningNumber, guessedNumber){
    if (winningNumber === guessedNumber) {
      alert('Gefeliciteerd, je hebt gewonnen.')
      return true;
    }
    else {
      alert('Dat is niet correct.')
      return false;
    }
  };

  const playGameRounds = function (numberOfRoundsToPlay, winningNumber) {
      for (let i = 0; i < numberOfRoundsToPlay; i++) {
      // requirement 4, 6:
      const guessedNumber = askForNumber();
      // requirement 7, 8: 
      const isguessedNumberCorrect = isGuessOfPlayerCorrect(winningNumber, guessedNumber);
      if (isguessedNumberCorrect){
        break;
        }
      numberOfGameRoundsLeft = (numberOfRoundsToPlay - 1 - i);
      if (numberOfGameRoundsLeft > 0) {
        alert(`test: U heeft nog ${numberOfGameRoundsLeft} pogingen over.`);
        continue;
      }
      else {
        alert(`test: U heeft nog ${numberOfGameRoundsLeft} pogingen over. Het spel is nu af`);
        break;
      }
    }
  }
  
  // Requirement 9: 
  const sayGoodbyeToPlayer = function (nameOfPlayer) {
    alert(`Dag ${nameOfPlayer}. Tot de volgende keer. `);
  }


  //PART 2 of 2: list of function calls:
  // Requirement 1, 2: 
  const nameOfPlayer = askUserName();

  // Requirement 3:
  displayUserName(nameOfPlayer);
  
  // Requirement 5: (replaced by requirement below, so this can be removed)
  //const winningNumber = getRandomInt(25);
  
  // Requirement: Bonus: user selects the range within which to select a number. This replaces requirement 5.
  minimumValueToDelimitGuessingRange = askMinimumValueToDelimitGuessingRange();

  maximumValueToDelimitGuessingRange = askMaximumValueToDelimitGuessingRange();

  winningNumber = getRandomIntBetweenTwoValuesInclusive(minimumValueToDelimitGuessingRange, maximumValueToDelimitGuessingRange);
  
  // Show winning number. Toggle on only while testing or modifying the code:
  //alert(`test: winnend getal: ${winningNumber}.`);

  const numberOfRoundsToPlay = 5;
  playGameRounds(numberOfRoundsToPlay, winningNumber);
  
  sayGoodbyeToPlayer(nameOfPlayer);
}
