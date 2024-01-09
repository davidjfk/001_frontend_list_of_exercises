// Deel 1: Objecten:
console.log('deel 1: Objecten');
console.log('answer 1,2:');
let person = {
    name: 'David',
    age: 45
};
console.log('answer 3:');
console.log(person);

console.log('answer 4:');
console.log(person.name);

console.log('answer 5:');
console.log(person.age);

console.log('answer 6:');

console.log(person.age);
console.log(person.name);
console.log(person['age']);
console.log(person['name']);

console.log('answer 7:');
person.evaluations = [7, 10, 9];
console.log(person.evaluations);

// Deel 2: Arrays:
console.log('deel 2: Arrays');
console.log('answer 1,2, 3:');
let allTypesOfData = ["groen", "blauw", "rood"];

console.log('answer 4:');
console.log(allTypesOfData.length);

console.log('answer 5:');
console.log(allTypesOfData[0]);

console.log('answer 6:');
console.log(allTypesOfData[allTypesOfData.length - 1]);

console.log('answer 7:');
allTypesOfData.push("geel");
console.log(allTypesOfData);

console.log('answer 8:');
allTypesOfData.push(5);
console.log(allTypesOfData);

console.log('answer 9:');
allTypesOfData.push({ greeting: "hi ik ben een object" });
console.log(allTypesOfData);

console.log('answer 10:');
allTypesOfData.push({ greeting: "hi ik ben een object" });
console.log(allTypesOfData[allTypesOfData.length - 1].greeting);

// Deel 3: Bekijk een "real-life" object:
console.log('deel 3: Bekijk een "real-life" object');

// data to use for part 3:
const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]
// end of data to use for part 3


console.log('answer 1:');
let nameofLastCatBreed = catBreeds[catBreeds.length - 1].name;
console.log(nameofLastCatBreed);

console.log('answer 2:');
let energyLevelOfFirstCatBreed = catBreeds[0].energy_level;
console.log(energyLevelOfFirstCatBreed);


console.log('answer 3:');
let temperament2OfCat2 = catBreeds[1].temperament[1];
console.log(temperament2OfCat2);

console.log('answer 4:');
let allTemperamentsOfCat3 = catBreeds[catBreeds.length - 1].temperament;
let lastTemperamentsOfCat3 = allTemperamentsOfCat3[allTemperamentsOfCat3.length - 1];
console.log(lastTemperamentsOfCat3);

console.log('answer 5:');
let favoriteFoodOfCat3 = catBreeds[catBreeds.length - 1].food.favourite_food;
console.log(favoriteFoodOfCat3);











