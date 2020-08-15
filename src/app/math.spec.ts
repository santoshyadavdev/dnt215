import { Calculator } from './math';

describe('Calculator', () => {

  it('should create a instance', () => {
    const calc = new Calculator();
    expect(calc).toBeDefined();
  });


  it('should add 2 numbers', () => {
    const calc = new Calculator();
    const result = calc.add(2,2)
    expect(result).toEqual(4);
  });

});
