class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayProduct() {
    console.log(`product ${this.name}`);
    console.log(`price $${this.price}`);
  }
  loopProfuct() {
    for (let i = 0; i < 10; i++) {
      console.log(this.name + " " + this.price);
    }
  }
}
class calculator {
  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
  }
  sum(){
    console.log(`${this.number1} + ${this.number2} = ${this.number1+this.number2}`);
  }
  subtract(){
    console.log(`${this.number1} - ${this.number2} = ${this.number1-this.number2}`);
  }
  devide(){
    console.log(`${this.number1} / ${this.number2} = ${this.number1/this.number2}`);
  }
  multiply(){
    console.log(`${this.number1} * ${this.number2} = ${this.number1*this.number2}`);
  }
}

const calltheFunction = new Product("farari", 99990990);
// calltheFunction.displayProduct();
// calltheFunction.loopProfuct();

const calc = new calculator(20,30);
calc.sum();
calc.subtract();
calc.devide();
calc.multiply();