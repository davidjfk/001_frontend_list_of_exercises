// No arguments
console.log('\n' + 'Part 1: No arguments');
const paintWall1 = function () {
    console.log("The wall has been painted red.");
}
paintWall1();

// Single argument
console.log('\n' + 'Part 2: single argument');
const paintWall2 = function (color) {
    console.log("The wall has been painted " + color + ".");
}
paintWall2('green');
paintWall2('blue');
paintWall2();


console.log("If you omit an argument in a function call, then the function returns 'undefined' by default.");


// Multiple arguments
console.log('\n' + 'Part 3: multiple arguments');
const paintWall3 = function (sideOfTheBuilding, color) {
    console.log("The " + sideOfTheBuilding + " wall has been painted " + color + ".");
}
paintWall3('South', 'yellow');

console.log('Order of the arguments of the function call must match the order of the parameters of the function definition. If you reverse the order in both the function definition and the function call, then the output remains the same. ')


// parameters in function definition AND arguments in function call have been reversed.
console.log('\n' + 'Part 3: multiple arguments');
const paintWall4 = function (color, sideOfTheBuilding) {
    console.log("The " + sideOfTheBuilding + " wall has been painted " + color + ".");
}
paintWall4('yellow', 'South');

// below: feedback after having made the assignment:
//new: string interpolation:

// Single argument
const paintWall5 = function (color) {
    console.log(`The wall has been painted ${color}`); // String interpolation
    // We could also have used string concatenation, but interpolation is often nicer
};

// Multiple arguments
const paintWall6 = function (whichWall, color) {
    console.log(`The ${whichWall} wall has been painted ${color}`); // String interpolation
};
paintWall3("south-east", "purple");


