
const exercise = require("../exercise");

describe("Exercises", () => {
    test("reverseNumber()", () => {
        expect(exercise.reverseNumber(349210)).toBe(12943);
    });
    test("alphabetize()", () => {
        expect(exercise.alphabetize("webmaster")).toBe("abeemrstw");
    });
    test("capitalize()", () => {
        expect(exercise.capitalize("the quick brown fox")).toBe("The Quick Brown Fox");
    });
    test("prime()", () => {
        expect(exercise.prime(5)).toBeTruthy();
        expect(exercise.prime(8)).toBeFalsy();
    });
    test("unique()", () => {
        expect(exercise.unique("thequickbrownfoxjumpsoverthelazydog")).toHaveLength(26);
    });
    test("secondest()", () => {
        expect(exercise.secondest([0])).toBeUndefined();
        expect(exercise.secondest([1, 2, 3, 4, 5])).toEqual([2, 4]);
    });
    test("bubbleSort()", () => {
        const input = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
        const output = [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1];
        expect(exercise.bubbleSort(input)).toEqual(output);
    });
    test("arbitraryCallbackFunction()", () => {
        const f = jest.fn(() => true);
        exercise.arbitraryCallbackFunction(f);
        expect(f).toHaveBeenCalled();
        expect(f).toHaveReturned();
    });
});
