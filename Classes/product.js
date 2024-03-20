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
const calltheFunction = new Product("farari", 99990990);
calltheFunction.displayProduct();
calltheFunction.loopProfuct();