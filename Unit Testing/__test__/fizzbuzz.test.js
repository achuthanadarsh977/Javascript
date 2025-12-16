

const fizbuzz = require('../fizbuzz')


test('Fizzbuzz' , () => {
      expect(fizbuzz(15)).toBe('FizzBuzz') 
})


test('Fizz' , () => {
    expect(fizbuzz(9)).toBe('Fizz')
})


test('Buzz', () => {
    expect(fizbuzz(25)).toBe('Buzz')
})