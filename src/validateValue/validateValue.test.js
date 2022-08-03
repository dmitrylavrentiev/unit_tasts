const validateValue = require('./validateValue')

describe('validateValue', () => {
    test('Positive', () => {
        expect(validateValue(50)).toBe(true)
    })
    test('Negative', () => {
        expect(validateValue(-5)).toBe(false)
    })
    test('Boundary value 0', () => {
        expect(validateValue(0)).toBe(false)
    })
    test('Boundary value 100', () => {
        expect(validateValue(100)).toBe(false)
        expect(validateValue(100)).toBeFalsy
    })
    
})

