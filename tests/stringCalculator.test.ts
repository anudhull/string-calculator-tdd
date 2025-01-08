import { StringCalculator } from '../src/stringCalculator';

describe('StringCalculator Tests', () => {
  let calculator: StringCalculator;

  beforeAll(() => {
    calculator = new StringCalculator();
  });

  it('empty string should return 0', () => {
    expect(calculator.add('')).toBe(0);
  });

  it('single number should return the number itself', () => {
    expect(calculator.add('1')).toBe(1);
  });

  it('input containing comma separated numbers should return the sum', () => {
    expect(calculator.add('1,4,2')).toBe(7);
  });

  it('should ignore non-numeric values and return sum of valid numbers', () => {
    expect(calculator.add('1\n4,abc')).toBe(5);
  });

  it('input containing only non-numeric characters should return 0', () => {
    expect(calculator.add('%*%')).toBe(0);
  });

  it('input containing new line as delimiter should return sum', () => {
    expect(calculator.add('1\n5\n3')).toBe(9);
  });

  it('input containing multiple delimiters together should return sum', () => {
    expect(calculator.add('1,9,5\n3')).toBe(18);
  });

  it('supports custom delimiter and returns sum', () => {
    expect(calculator.add('//;\n1;2;3')).toBe(6);
  });

  it('single negative number should throw an error with that number', () => {
    expect(() => calculator.add('1,-2\n3')).toThrow('negative numbers not allowed: -2');
  });

  it('multiple negative numbers should throw an error with all the negative numbers', () => {
    expect(() => calculator.add('1,-2\n-3,-4')).toThrow('negative numbers not allowed: -2, -3, -4');
  });
});
