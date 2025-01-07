export class StringCalculator {
  add(input: string): number {
    if (input === '') {
      return 0;
    }
    const delimiters = [',', '\n'];
    let delimiterRegex = new RegExp(delimiters.join('|'));

    if (input.startsWith('//')) {
      const customDelimiter = input[2];
      delimiterRegex = new RegExp(customDelimiter);
      input = input.slice(4);
    }

    const numbers = input.split(delimiterRegex).map(num => this.parseStringToNumber(num));
    return this.calculateSum(numbers);
  }

  parseStringToNumber(input: string): number {
    const output = parseInt(input);
    return isNaN(output) ? 0 : output;
  }

  private calculateSum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}