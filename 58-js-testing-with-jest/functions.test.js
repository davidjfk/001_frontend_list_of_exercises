const functions = require('./functions.js')


test('Should be null', () => {
    // Start with expect()
    // Inside the first brackets put what you want to test. That will be a function.
    // Then follows your .toBeSomethingSomething function,
    // find the appropriate function in the documentation.
    // In this case we want to check if the function "isNull()" actually
    // returned null. So "toBeNull()" makes the most sense
    expect(functions.isNull()).toBeNull();
});


test('checkValue Should be falsy when argument is undefined', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});


test('User should be Brad Traversy object', () => {
    const user = { firstName: 'Brad', lastName: 'Traversy' }
    expect(functions.createUser()).toEqual(user);
});


// Tests are really just functions. To demonstrate that, 
// we now let you create tests that work without outside input:

// Less than or greater than
test('Should be under or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toStrictEqual(1600);
});


// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});
// an: question does not mention 'i', but only 'I' (so imho answer is incorrect)

// Arrays
test('Admin should be in usernames', () => {
    const usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});
// imho: answer is wrong, because 'Admin' should be in usernames, but not 'admin'.