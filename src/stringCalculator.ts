export class StringCalculator {
  add(input: string): number {
    if (input === '') {
      return 0;
    }
    const delimiters = [',', '\n'];
    const delimiterRegex = new RegExp(delimiters.join('|'));

    if (delimiterRegex.test(input)) {
      let numbers = input.split(delimiterRegex).map(num => this.parseStringToNumber(num));
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