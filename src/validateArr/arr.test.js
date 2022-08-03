const arr = require('./arr')

const intNumbers = [1, 2, 3]
const intString = ['1', '2', '3']
const mixArr = [false, 1, '2', 2, 3, null, undefined, true]
const emptyArr = []

describe('Arr', () => {
    beforeAll(() => {
        console.log('Before All');
    })
    beforeEach(() => {
        console.log('Before Each');
    })

    test('Arr of int numbers', () => {
        expect(arr(intNumbers)).toEqual(intString)
    })
    test('Mixed arr', () => {
        expect(arr(mixArr)).toEqual(intString)
    })
    test('Empty arr', () => {
        expect(arr(emptyArr)).toEqual(emptyArr)
    })

    afterAll(() => {
        console.log('After All');
    })
    afterEach(() => {
        console.log('After Each');
    })
})