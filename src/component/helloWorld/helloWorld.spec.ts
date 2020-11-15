import { HelloWorld } from './helloWorld';

describe('The Hello World component', () => {
  const component = HelloWorld;

  it('should say hi', () => {
    const name = 'Pi';
    const littlePi = new component(name);
    spyOn(console, 'log');

    littlePi.hi();

    expect(console.log).toHaveBeenCalled();
    expect(littlePi.name).toEqual(name);
  });
});
