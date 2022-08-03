const square = require('./square')

describe('Square', () => {
    test('Mock pow function with 1', () => {
        const pow = jest.spyOn(Math, 'pow')
        const sqr = square(1)

        expect(pow).not.toHaveBeenCalled()
        expect(sqr).toBe(1)
    })

    test('Mock pow function with 2', () => {
        const pow = jest.spyOn(Math, 'pow')
        const sqr = square(2)
        
        expect(pow).toHaveBeenCalled()
        expect(pow).toBeCalledTimes(1)
        expect(sqr).toBe(4)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
})