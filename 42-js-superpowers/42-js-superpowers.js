console.log("42-js-Superpowers. David Sneek")

let arraySuperheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ]


console.log(`vraag 1: `)

let selectNamesOfAllSuperheroes = (array) => {
    const heroNames = array.map(element =>  { return element.name });
    return heroNames;  
}
console.log(selectNamesOfAllSuperheroes(arraySuperheroes));




 
console.log(`vraag 2: `)

let selectLightHeroes = (array) => {
    const heroes = array.filter(element => element.weight < 190);
    return heroes;  
}
console.log(selectLightHeroes(arraySuperheroes));


console.log(`vraag 3: `)

let selectHeroNamesWeighing200Pounds = arraySuperheroes
    .filter((hero) => {
      return parseInt(hero.weight) === 200;
  }).map((hero) => {
      return hero.name
  });

console.log(selectHeroNamesWeighing200Pounds);



console.log(`vraag 4: `)
console.log("opton 1: with datastructure set")
let selectComicsOfFirstAppearance1 = arraySuperheroes
    .map((hero) => {
        return hero.first_appearance
    })

const UniqueComicsOfFirstAppearance = [...new Set(selectComicsOfFirstAppearance1)];
console.log(UniqueComicsOfFirstAppearance);


console.log("option 2: using helper function indexOf")
const unique = (value, index, self) => {
    return self.indexOf(value) === index
}
let selectComicsOfFirstAppearance2 = arraySuperheroes
    .map((hero) => {
        return hero.first_appearance
    }).filter(unique)

console.log(selectComicsOfFirstAppearance2);   


console.log(`vraag 5: `)

let showSuperheroes = function(publisherName){
    // let temp = "DC Comics"
    let selectHerosOfPublisher = arraySuperheroes
        .filter(function (hero) {
            return hero.publisher === publisherName
        });
    
    return selectHerosOfPublisher;
}

console.log(showSuperheroes("DC Comics"));
console.log(showSuperheroes("Marvel Comics"));



console.log(`vraag 6: `)

let isConvertableToInt = (str) => {
    let pattern = /[\sA-Za-z]/g;
    let result = pattern.test(str);
    return !result;
}

let cummulatiefGewichtSuperhelden = function(publisherName){
    // let temp = "DC Comics"
    let selectHerosOfPublisher = arraySuperheroes
        .filter(function (hero) {
            return hero.publisher === publisherName
        }).reduce((totalWeight, myHero) => {
        let intMyHeroWeight;
        // check for null or undefined
        myHero.weight = myHero.weight ?? "0";
        // check if value is string that can be converted to int     
            if (isConvertableToInt(myHero.weight)){
                intMyHeroWeight = parseInt(myHero.weight)
            } else {
                myHero.weight = "0"
                intMyHeroWeight = parseInt(myHero.weight)
        }           
        return intMyHeroWeight + totalWeight 
        },0)   
    return selectHerosOfPublisher;
    
}

console.log(`cummulatief gewicht van DC Comics superhelden: ${cummulatiefGewichtSuperhelden("DC Comics")}`);



console.log(`vraag 7: `)
console.log(`cummulatief gewicht van Marvel Comics superhelden: ${cummulatiefGewichtSuperhelden("Marvel Comics")}`);



console.log("vraag 8: oplossing (met .filter)  ")


let searchHeaviestHero = function(){
    let weightOfHeros = [];
    let highestWeight = 0;
    let selectHerosOfPublisher = arraySuperheroes
        .filter((myHero) => { 
            for (let { weight } of arraySuperheroes) {
                let intMyHeroWeight;
                weight = weight ?? "0";
                if (isConvertableToInt(weight)) {
                    intMyHeroWeight = parseInt(weight)
                } else {
                    weight = "0"
                    intMyHeroWeight = parseInt(weight)
                }
                weightOfHeros.push(intMyHeroWeight);
            }
            highestWeight = Math.max(...weightOfHeros);
            let indexOfHeaviestHero = weightOfHeros.indexOf(highestWeight)  
            arraySuperheroes[indexOfHeaviestHero].name;
            return myHero.name === (arraySuperheroes[indexOfHeaviestHero].name)
        })
    // assuming only 1 superhero is the heaviest
    return selectHerosOfPublisher[0].name;   
}
console.log(searchHeaviestHero());



console.log("vraag 8: oplossing (zonder .map, .filter, .reduce)  ")
let weightOfHeros = [];
let highestWeight = 0;
for (let { weight } of arraySuperheroes) {   
    let intMyHeroWeight;
        weight = weight ?? "0";    
        if (isConvertableToInt(weight)){
            intMyHeroWeight = parseInt(weight)
        } else {
            weight = "0"
            intMyHeroWeight = parseInt(weight)
    }
    weightOfHeros.push(intMyHeroWeight);
}
highestWeight = Math.max(...weightOfHeros);
let indexOfHeaviestHero = weightOfHeros.indexOf(highestWeight)
console.log(arraySuperheroes[indexOfHeaviestHero].name);



