const { anagramChecker } = require('./anagramChecker');

const testStrings = {
    1: '"wisdom" ? "mid sow"',
    2: '"Seth Rogan" ? "Gathers No"',
    3: '"Reddit" ? "Eat Dirt"',
    4: '"Schoolmaster" ? "The classroom"',
    5: '"Astronomers" ? "Moon starer"',
    6: '"Vacation Times" ? "I\'m Not as Active"',
    7: '"Dormitory" ? "Dirty Rooms"'
};

describe('anagramChecker', () => {
    test('"wisdom" ? "mid sow" is true', () => {
        expect(anagramChecker(testStrings[1])).toEqual(
            '"wisdom" is an anagram of "mid sow"'
        );
    });

    test('"Seth Rogan" ? "Gathers No" is true', () => {
        expect(anagramChecker(testStrings[2])).toEqual(
            '"Seth Rogan" is an anagram of "Gathers No"'
        );
    });

    test('"Reddit" ? "Eat Dirt" is false', () => {
        expect(anagramChecker(testStrings[3])).toEqual(
            '"Reddit" is NOT an anagram of "Eat Dirt"'
        );
    });

    test('"Schoolmaster" ? "The classroom" is true', () => {
        expect(anagramChecker(testStrings[4])).toEqual(
            '"Schoolmaster" is an anagram of "The classroom"'
        );
    });

    test('"Astronomers" ? "Moon starer" is false', () => {
        expect(anagramChecker(testStrings[5])).toEqual(
            '"Astronomers" is NOT an anagram of "Moon starer"'
        );
    });

    test('"Vacation Times" ? "I\'m Not as Active" is true', () => {
        expect(anagramChecker(testStrings[6])).toEqual(
            '"Vacation Times" is an anagram of "I\'m Not as Active"'
        );
    });

    test('"Dormitory" ? "Dirty Rooms" is false', () => {
        expect(anagramChecker(testStrings[7])).toEqual(
            '"Dormitory" is NOT an anagram of "Dirty Rooms"'
        );
    });
});
