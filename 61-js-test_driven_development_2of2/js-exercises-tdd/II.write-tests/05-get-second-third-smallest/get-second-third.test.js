const { describe, test, expect } = require("@jest/globals");
const getSecondThird = require('./get-second-third.js')



test("Get second and third", function () {
    // arrange:
    const testInput = [90, 5, 11, 8, 6];
    const expectedOutput = [6, 8];
    // act:
    const actualOutput = getSecondThird(testInput)
    // assert:
    expect(actualOutput).toStrictEqual(expectedOutput)
});



// example
// input = 
// expected output = 

// also test that the original array has not changed
