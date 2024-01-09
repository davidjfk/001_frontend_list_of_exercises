// Hey kiddo
console.log('\n', 'Part1: Hey kiddo')
const CheckAge = function (age) {
    return ((age >= 18) ? true : false);
}

/*
winc-feedback:
    const isAdultShort = age => age >= 18;
    // this works, becau
*/

const greetSomeone = function (age) {
    const messageforAdult = "Hello there";
    const messageforChild = "Hey kiddo";
    return ((CheckAge(age)) ? messageforAdult : messageforChild);
}

const messageforAdult = greetSomeone(18);
console.log('messageforAdult: ', messageforAdult);
const messageforChild = greetSomeone(17);
console.log('messageforChild: ', messageforChild);


//VAT exercise 1
console.log('\n', 'Part1: VAT exercise 1: ')
//helper function:
const calcVatAmountFromBasePrice = function (vatPercentage, basePrice) {
    const vatAmount = (vatPercentage * basePrice) / 100;
    return vatAmount;
}

//main function:
const calcPriceWithVat = function (vatPercentage, basePrice) {
    const priceWithVat = (basePrice + calcVatAmountFromBasePrice(vatPercentage, basePrice));
    //rounding is not a requirement in the exercise
    roundedPriceWithVat = priceWithVat.toFixed(2);
    return roundedPriceWithVat;
}

const priceWithVat = calcPriceWithVat(21, 100);
console.log('priceWithVat: ', priceWithVat);


//VAT exercise 2
console.log('\n', 'Part1: VAT exercise 2: ')
//helper function:
const calcVatAmountFromPriceWithVat = function (vatPercentage, priceWithVat) {
    const vatAmount = ((priceWithVat) / (vatPercentage + 100)) * vatPercentage;
    return vatAmount;
}

//main function:
const calcBaseprice = function (vatPercentage, priceWithVat) {
    const vatAmount = calcVatAmountFromPriceWithVat(vatPercentage, priceWithVat);
    const basePrice = (priceWithVat - vatAmount);
    //rounding is not a requirement in the exercise
    roundedBasePrice = basePrice.toFixed(2);
    arrayWithBasePriceAndVatAmount = { basePrice: roundedBasePrice, vatPercentage: vatPercentage }
    return arrayWithBasePriceAndVatAmount;
}
//an: mistake: I should have returned array instead of object.
//an: mistake: name of main function should be: calcBasePriceAndVat, because it is a more complete description of what the function does.

const basePriceAndVatAmount = calcBaseprice(21, 100);
console.log('BasePrice And VatAmount: ', basePriceAndVatAmount);

