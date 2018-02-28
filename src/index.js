class SmartCalculator {
  constructor(initialValue) {
    this.str = initialValue.toString();
    this.value;
  }

  add(number) {
    this.str = this.str + '+' + number.toString();
    this.value = eval(this.str);
    return this;
  }
  
  subtract(number) {
    this.str = this.str + '-' + number.toString();
    this.value = eval(this.str);
    return this;
  }

  multiply(number) {
    this.str = this.str + '*' + number.toString();
    this.value = eval(this.str);
    return this;
  }

  devide(number) {
    this.str = this.str + '/' + number.toString();
    this.value = eval(this.str);
    return this;
  }

  pow(number) {
    this.str = this.str + '**' + number.toString();
    this.value = eval(this.str);
    return this;
  }

  valueOf() {
    return this.value;
  }

}

module.exports = SmartCalculator;
