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
  

  
  const calc = new calculator(20,30);
  calc.sum();
  calc.subtract();
  calc.devide();
  calc.multiply();