const { describe, test, expect } = require("@jest/globals");
const greetPeople = require('./greet-people.js')

test("print list of names prefixed with Hello", function () {
  // Arrange
  const testPeople = ['Marie', 'Mohammed', 'Hein'];
  // Act
  const testResult = greetPeople(testPeople);
  // Assert
  const expectedResult = "Hello MarieMohammedHein";
  expect(testResult).toBe(expectedResult);
});

