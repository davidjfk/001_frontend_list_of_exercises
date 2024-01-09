// Assignment: function basics: exercise
console.log('answer 1,2:');
console.log('Yes, code runs with node');

console.log('answer 3:');
console.log('step: put pizza in the oven');


console.log('answer 3,4,5,6:');
const makePizza = function () {
    console.log('Hello Fresh: how to prepare a pizza')
    console.log('step1: put vegetables, cheese and tomato sauce on the pizza');
    console.log('step2: put pizza in the oven');
    console.log('step3: wait 15 minutes');
    console.log('step4: remove pizza from the oven \n');
};

console.log('answer 7:');
console.log('to see function result, you must call  the function');

console.log('answer 8:');
makePizza();

console.log('answer 9:');
makePizza();
makePizza();
makePizza();

//Sushi time: 1 meal at a time:
console.log('\n sushi answer 1, 2, 3:  ');
const makeSushi = function () {
    console.log('Hello Fresh: how to prepare Sushi')
    console.log('step1: prepare rice');
    console.log('step2: add vegetables to rice');
    console.log('step3: wrap rice-vegetable-mix withh salmon ');
}
makeSushi();

// in a restaurant
console.log('\n orders in a restaurant');
makeSushi();
makeSushi();
makeSushi();
makePizza();
makePizza();

