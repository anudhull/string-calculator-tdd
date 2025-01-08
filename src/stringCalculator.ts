export class StringCalculator {
  add(input: string): number {
    if (input === '') return 0;

    const { delimiters, processedInput } = this.extractDelimiters(input);
    let delimiterRegex = new RegExp(`[${delimiters.join("")}]`);
    const numbers = this.splitInput(processedInput, delimiterRegex);

    this.handleNegativeNumbers(numbers);

    return this.calculateSum(numbers);
  }

  private extractDelimiters(input: string): { delimiters: string[], processedInput: string } {
    const defaultDelimiters = [',', '\n'];
    let processedInput = input;

    if (input.startsWith('//')) {
      let customDelimiters = [];
      let remainder = input.slice(4);

      if (input.includes('[') && input.includes(']')) {
        const startBracketIndex = input.indexOf('[');
        const endBracketIndex = input.lastIndexOf(']');
        const splittedDelimiters = input.substring(startBracketIndex + 1, endBracketIndex).split('][');
        customDelimiters.push(...splittedDelimiters);
        remainder = input.substring(endBracketIndex + 2,);
      } else {
        customDelimiters.push(input[2]);
      }
      defaultDelimiters.push(...customDelimiters);
      processedInput = remainder;
    }

    return { delimiters: defaultDelimiters, processedInput };
  }

  private splitInput(input: string, delimiterRegex: RegExp): number[] {
    return input.split(delimiterRegex).map(num => this.parseStringToNumber(num));
  }

  private parseStringToNumber(input: string): number {
    const number = parseInt(input);
    return isNaN(number) || number > 1000 ? 0 : number;
  }

  private calculateSum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  private handleNegativeNumbers(numbers: number[]): void {
    const negativeNumbers = numbers.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }
  }
}