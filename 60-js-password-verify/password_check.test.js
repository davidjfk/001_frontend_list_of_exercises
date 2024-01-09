
const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
} = require("./password_check.js");




describe("check if password is not null", () => {
    test("password is not null", () => {
        let testResult = isNotNull("guessMe");
        expect(testResult).toBe(true);
    })
    test("password is null", () => {
        let testResult = isNotNull(null);
        expect(testResult).toBe(false);
    })
})

describe("check if password has right length", () => {
    test("password length equals 9", () => {
        let testResult = hasRightLength("abcdefghi");
        expect(testResult).toBe(false);
    })
    test("password length equals 8", () => {
        let testResult = hasRightLength("abcdefg");
        expect(testResult).toBe(true);
    })
})

describe("check if password contains 1 or more uppercase characters", () => {
    test("password has 0 uppercase character", () => {
        let testResult = hasUpperCaseCharacter("abcdefg");
        expect(testResult).toBe(false);
    })
    test("password has 1 uppercase character", () => {
        let testResult = hasUpperCaseCharacter("aBcdefg");
        expect(testResult).toBe(true);
    })
    test("password has 2 uppercase character", () => {
        let testResult = hasUpperCaseCharacter("aBcdEfg");
        expect(testResult).toBe(true);
    })
})

describe("check if password contains 1 or more lowercase characters", () => {
    test("password has 0 uppercase character", () => {
        let testResult = hasLowerCaseCharacter("ABCDEF");
        expect(testResult).toBe(false);
    })
    test("password has 1 lowercase character", () => {
        let testResult = hasLowerCaseCharacter("ABcDEF");
        expect(testResult).toBe(true);
    })
    test("password has 2 lowercase character", () => {
        let testResult = hasLowerCaseCharacter("ABcDeF");
        expect(testResult).toBe(true);
    })
})

describe("check if password contains 1 or more digits", () => {
    test("password has 0 digits", () => {
        let testResult = hasDigit("ABCDEF");
        expect(testResult).toBe(false);
    })
    test("password has 1 lowercase character", () => {
        let testResult = hasDigit("ABc5DEF");
        expect(testResult).toBe(true);
    })
    test("password has 2 lowercase character", () => {
        let testResult = hasDigit("A2BcDe6F");
        expect(testResult).toBe(true);
    })
})

describe("check if minimum of 3 conditions have been met", () => {
    // not a requirement to test this, but I do this just for fun. 
    test("2 conditions have been met ", () => {
        let conditionsFulfilled = [false, true, false, true, false]
        let testResult = minimumConditionsReached(conditionsFulfilled);
        expect(testResult).toBe(false);
    })
    test("3 conditions have been met", () => {
        let conditionsFulfilled = [true, true, false, true, false]
        let testResult = minimumConditionsReached(conditionsFulfilled);
        expect(testResult).toBe(true);
    })
    test("4 conditions have been met", () => {
        let conditionsFulfilled = [true, true, false, true, true]
        let testResult = minimumConditionsReached(conditionsFulfilled);
        expect(testResult).toBe(true);
    })
})

describe("check if fn verifyPassword works", () => {
    // not a requirement to test this, but I do this just for fun. 
    test("correct password", () => {
        let testResult = verifyPassword("aB2");
        expect(testResult).toBe(true);
    })
    test("correct password", () => {
        let testResult = verifyPassword("D34asL9");
        expect(testResult).toBe(true);
    })
    test("incorrect password: lowercase missing", () => {
        let testResult = verifyPassword("3MN8");
        expect(testResult).toBe(false);
    })

    test("incorrect password: only upper case", () => {
        let testResult = verifyPassword("ABVG");
        expect(testResult).toBe(false);
    })

    test("incorrect password: only lowercase", () => {
        let testResult = verifyPassword("abvdes");
        expect(testResult).toBe(true);
    })

    test("incorrect password: only digits", () => {
        let testResult = verifyPassword("57643");
        expect(testResult).toBe(false);
    })

    test("incorrect password: more than 8 lower case characters", () => {
        let testResult = verifyPassword("abcdefghi");
        expect(testResult).toBe(false);
    })
    test("incorrect password: null", () => {
        let testResult = verifyPassword(null);
        expect(testResult).toBe(false);
    })
})