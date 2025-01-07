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
    expect(calculator.add('1,4,abc')).toBe(5);
  });

  it('input containing only non-numeric characters should return 0', () => {
    expect(calculator.add('%*%')).toBe(0);
  });
});
