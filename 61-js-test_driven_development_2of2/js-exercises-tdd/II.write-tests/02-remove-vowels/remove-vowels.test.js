const { describe, test, expect } = require("@jest/globals");
const removeVowels = require('./remove-vowels.js')

test("remove vowels from word", function () {
  // Arrange
  const expectedResult = "_a_ue_";
  // Act
  const actualResult = removeVowels('samuel');
  // Assert
  expect(actualResult).toBe(expectedResult);
});
