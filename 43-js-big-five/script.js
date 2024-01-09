


console.log(`Opdracht: DOM Manipulatie: dynamisch elementen toevoegen aan de DOM: `)
console.log(`David Sneek, spotting the big five`)
console.log('Solution 1, see below.   Solution 2, at the bottom, greyed out')


console.log(`Solution 1`)
console.log(`Deel 1 - Elementen toevoegen aan de DOM: `)
/*
Opdracht: Wanneer ik als gebruiker op een button van één van de Big 5 klik, wil ik dat die verschijnt in mijn lijstje met "animals spotted".
*/
    const addAnimalClickEvent = function (e) {
        console.log(e.target.innerText)
        const listElement = document.createElement("li")
        listElement.className = "spotted-animals-list-item";
        listElement.innerText = e.target.innerText;
        const spottedAnimalList = document.querySelector("#spotted-animals-list")
        spottedAnimalList.appendChild(listElement)
    }

    const buttonsAddAnimals = document.querySelectorAll(".big-five-button")
    for (let buttonAnimal of buttonsAddAnimals) {
        buttonAnimal.addEventListener("click", addAnimalClickEvent)
    }


    console.log(`Deel 2 - 1 element verwijderen uit de DOM: `)
    /*
    Opdracht: Wanneer ik als gebruiker op de "remove the first item" knop klik wordt de eend die ik op mijn tocht naar het vliegveld heb gespot verwijderd (het is toch een beetje een vreemde eend in dit lijstje van de big five). De gebruiker kan op deze knop blijven klikken, telkens wordt het eerste item verwijderd.
    */
    const removeAnimalClickEvent = function(e) {
        console.log(e.target)
        const spottedAnimalsList = document.getElementById("spotted-animals-list")
        const animalToRemove = document.getElementsByClassName("spotted-animals-list-item")[0]
        spottedAnimalsList.removeChild(animalToRemove)
    }
   
    const buttonRemoveAnimal = document.querySelector("#remove-first-item-button")
    buttonRemoveAnimal.addEventListener("click", removeAnimalClickEvent)
    

    console.log(`Deel 3 - Meerdere element verwijderen uit de DOM: `)
    /*
    Opdracht: Wanneer ik als gebruiker op de "remove all spotted animals" knop klik worden alle dieren die ik heb gespot verwijderd.
    */
    const removeAnimalsClickEvent = function() {
        const spottedAnimalList = document.querySelector("#spotted-animals-list")
        const animalsToRemove = document.getElementsByClassName("spotted-animals-list-item")
        const animalsToRemoveArray = Array.from(animalsToRemove)
        for (let animal of animalsToRemoveArray) {
            spottedAnimalList.removeChild(animal);
        } 
    }

    const buttonRemoveAnimals = document.querySelector("#remove-all-button")
    buttonRemoveAnimals.addEventListener("click", removeAnimalsClickEvent)



// console.log("Solution 2: ")   
// console.log(`Deel 1 - Elementen toevoegen aan de DOM: `)
// const animalsOnDisplay = ["Duck"];

// const addAnimalClickEvent = function (e) {
//     console.log(e.target.innerText)
//     animalsOnDisplay.push(e.target.innerText)
//     console.log(animalsOnDisplay)
//     displayAnimals(animalsOnDisplay);
// }

// const buttonsAddAnimals = document.querySelectorAll(".big-five-button")
// for (let buttonAnimal of buttonsAddAnimals) {
//     buttonAnimal.addEventListener("click", addAnimalClickEvent)
// }


// console.log(`Deel 2 - 1 element verwijderen uit de DOM: `)
// const removeAnimalClickEvent = function() {
//     // console.log(e.target.innerText)
//     animalsOnDisplay.shift()
//     console.log(animalsOnDisplay)
//     displayAnimals(animalsOnDisplay);
// }

// const buttonRemoveAnimal = document.querySelector("#remove-first-item-button")
// buttonRemoveAnimal.addEventListener("click", removeAnimalClickEvent)


// console.log(`Deel 3 - Meerdere element verwijderen uit de DOM: `)
// const removeAnimalsClickEvent = function() {
//     animalsOnDisplay.length = 0;
//     console.log(animalsOnDisplay)
//     displayAnimals(animalsOnDisplay);
// }
// const buttonRemoveAnimals = document.querySelector("#remove-all-button")
// buttonRemoveAnimals.addEventListener("click", removeAnimalsClickEvent)

// const displayAnimals = animalsOnDisplay => {
//     // remove statically rendered html element Duck
//     const spottedAnimalsList = document.querySelector("#spotted-animals-list")
//     spottedAnimalsList.innerHTML = ""
//     for (let animal of animalsOnDisplay) {
//     const htmlWithAnimal = `<li class="spotted-animals-list-item">${animal}</li>`
//         spottedAnimalsList.insertAdjacentHTML('beforeend', htmlWithAnimal);          
//     }
// }