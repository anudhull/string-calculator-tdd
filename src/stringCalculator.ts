export class StringCalculator {
  add(input: string): number {
    if (input === '') {
      return 0;
    }
    if (input.includes(',')) {
      let numbers = input.split(',').map(num => this.parseStringToNumber(num));
      const sum = numbers.reduce((sum, num) => sum + num, 0);
      return sum;
    }
    
    return this.parseStringToNumber(input);
  }

  parseStringToNumber(input: string): number {
    const output = parseInt(input);
    if (isNaN(output)) {
      return 0;
    }
    return output;
  }
}