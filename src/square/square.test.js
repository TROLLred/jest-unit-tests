const square = require('./square');

describe('square', () => {
    let mockValue;
    //Перед каждым тестом
    beforeEach(() => {
        //добавить в бд
    })
    //Один раз перед всеми тестами
    beforeAll(() => {

    })
    test('Корректное значение', () => {
        expect(square(2)).toEqual(4)
        expect(square(2)).toBeLessThan(5)
        expect(square(2)).toBeGreaterThan(3)
    })
    test('Метод вызвался', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(2);
        expect(spyMathPow).toBeCalledTimes(1)
    })
    test('Метод не вызвался', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(1);
        expect(spyMathPow).toBeCalledTimes(0)
    })
    //
    afterEach(() => {
        jest.clearAllMocks()
        //удалить из бд
    })
    afterAll(() => {

    })
})