const { describe, test, expect } = require("@jest/globals");
const numbersGreaterThan10 = require('./numbersGreaterThan10.js')



test("Get numbers greater than 10", function () {
    // arrange:
    const testInput = [4, 10, 32, 9, 21];
    const expectedOutput = [32, 21];
    // act:
    const actualOutput = numbersGreaterThan10(testInput)
    // assert:
    expect(actualOutput).toStrictEqual(expectedOutput)
});


