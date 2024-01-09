// functie 1
const sum1 = (...numbers) => {
    return numbers.reduce((prev, current) => prev + current );
}

console.log(sum1(1, 2, 3));
console.log(sum1(1, 2, 3, 4, 5));


// functie 2
const sum2 = (a, b, c, d) => {
    return a + b + c + d;
}

let nums = [1, 2, 3, 4];

console.log(sum2(...nums));
