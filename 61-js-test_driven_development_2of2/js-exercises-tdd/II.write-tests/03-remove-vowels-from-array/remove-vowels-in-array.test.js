const { describe, test, expect } = require("@jest/globals");
const removeVowelsForWords = require('./remove-vowels-in-array.js')

test("remove vowels from all words in array", function () {
  // Arrange
  const testInput = ["Irina", "Etza", "Daniel"];
  const expectedResult = ['__i_a', '___a', '_a_ie_'];
  // Act
  expect(removeVowelsForWords(testInput)).toStrictEqual(expectedResult);
  // Assert
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
