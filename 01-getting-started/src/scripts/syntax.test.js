import functions from './syntax'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("large");
});

test('Check addition of numbers', () => {  
    expect(functions.adding(1,4)).toBe(5);
    expect(functions.adding(2,4)).toBe(6);
    expect(functions.adding(3,4)).toBe(7);
});

test('Doing things with strings', () => {
    expect(functions.string("This is ","so")).toBe("This is so much fun");
    expect(functions.string("That is ","too")).toBe("That is too much fun"); 
});

//test('Checking for Boolean', () => {
//    expect(functions.output("true")).toBe("true");



