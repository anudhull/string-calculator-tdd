export class StringCalculator {
  add(input: string): number {
    if (input === '') {
      return 0;
    }
    let numbers = input.split(',').map(num => Number(num));
    const sum = numbers.reduce((sum, num) => sum + num, 0);
    return sum;
  }
}