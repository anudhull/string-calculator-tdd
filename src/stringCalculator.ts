export class StringCalculator {

  add(input: string): number {
    if (input === '') return 0;

    const { delimiters, processedInput } = this.extractDelimiters(input);
    
    let delimiterRegex = new RegExp(`[${delimiters.join("")}]`);
    const numbers = this.extractNumbers(processedInput, delimiterRegex);

    this.handleNegativeNumbers(numbers);

    return this.calculateSum(numbers);
  }

  multiply(input: string) : number {
    if (input === '') return 0;

    const { delimiters, processedInput } = this.extractDelimiters(input);
    
    let delimiterRegex = new RegExp(`[${delimiters.join("")}]`);
    const numbers = this.extractNumbers(processedInput, delimiterRegex);

    this.handleNegativeNumbers(numbers);
    return this.calculateMultiplication(numbers);
  }

  private extractDelimiters(input: string): { delimiters: string[], processedInput: string } {
    const combinedDelimiters = [',', '\n'];
    let processedInput = input;

    if (input.startsWith('//')) {
      processedInput = input.slice(4);

      if (input.includes('[') && input.includes(']')) {
        const delimiters = this.extractCustomDelimiters(input);
        combinedDelimiters.push(...delimiters);
        processedInput = input.slice(input.lastIndexOf(']') + 1);
      } else {
        combinedDelimiters.push(input[2]);
      }
    }

    return { delimiters: combinedDelimiters, processedInput };
  }

  private extractCustomDelimiters(input: string): string[] {
    const startBracketIndex = input.indexOf('[');
    const endBracketIndex = input.lastIndexOf(']');
    const splittedDelimiters = input.substring(startBracketIndex + 1, endBracketIndex).split('][');
    return splittedDelimiters;
  }

  private extractNumbers(input: string, delimiterRegex: RegExp): number[] {
    return input.split(delimiterRegex).map(num => this.parseStringToNumber(num));
  }

  private parseStringToNumber(input: string): number {
    const number = parseInt(input);
    return isNaN(number) || number > 1000 ? 0 : number;
  }

  private calculateSum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  private calculateMultiplication(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum * num, 1);
  }

  private handleNegativeNumbers(numbers: number[]): void {
    const negativeNumbers = numbers.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }
  }
}