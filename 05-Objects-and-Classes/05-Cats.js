function cats(input) {
  let cats = []
  class Cat {
    constructor(name, age) {

      this.says = () => {
        console.log(`${name}, age ${age} says Meow`);
      }
    }
  }

  for (let i = 0; i < input.length; i++) {
    const element = input[i].split(' ');
    let name, age;
    [name, age] = [element[0]], element[1];
    cats.push(new Cat(name, age))
  }

  console.log(cats);


}
cats(['Mellow 2', 'Tom 5'])