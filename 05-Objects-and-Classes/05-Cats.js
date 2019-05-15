function cats(input) {
  class Cat {
    constructor(name, age) {
      this.name = name,
        this.age = age
    }
    sayMeow() {
      console.log(`${this.name}, age ${this.age} says Meow`);

    }
  }

  for (const data of input) {
    let catData = data.split(' ');
    let puffyCat = new Cat(catData[0], catData[1]);
    puffyCat.sayMeow();
  }
}
cats(['Mellow 2', 'Tom 5'])