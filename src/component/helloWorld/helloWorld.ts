export class HelloWorld {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  hi(): void {
    console.log(`Hi, ${this.name}`);
  }
}
