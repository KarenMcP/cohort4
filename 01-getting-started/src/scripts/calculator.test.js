import{adding,subtracting,multiplying,dividing} from './calculator';

test('Check adding function', () => {  
    expect(adding(1,4)).toBe(5);
    expect(adding(3,4)).toBe(7);
    expect(adding(-7,-7)).toBe(-14);
    expect(adding(1.2,0.5)).toBe(1.7);
});

test('Check subtracting function', () => {  
    expect(subtracting(1,4)).toBe(-3);
    expect(subtracting(7,2)).toBe(5);
});

test('Check multiplying function', () => {
    expect(multiplying(1,4)).toBe(4);
    expect(multiplying(4,4)).toBe(16);
})

test('Check dividing function', () => {
    expect(dividing(10,2)).toBe(5);
    expect(dividing(15,2)).toBe(7.5);
})
