class AmountCalculator {
    constructor() {
      this.amount = 0;
    }
  
    lacs(value) {
      this.amount += value * 1_00_000;
      return this;
    }
  
    crore(value) {
      this.amount += value * 1_00_00_000;
      return this;
    }
  
    thousand(value) {
      this.amount += value * 1_000;
      return this;
    }
  
    value() {
      return this.amount;
    }
  }
  
  const computeAmount = () => {
    return new AmountCalculator();
  };
  
  const result = computeAmount()
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(20)
    .thousand(45)
    .crore(7)
    .value();
  
  console.log(result);
  