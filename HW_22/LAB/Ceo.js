const {Employee} = require('./Employee.js')

class CEO extends Employee {
  constructor(firstname, lastname, salary) {
    super(firstname, lastname, salary);
  }
  getSalary(){ // simulate public method
    return super.getSalary() * 2;
  };
  hello() { // simulate public method
    console.log("Hi, nice to meet you. "+this.firstname+"!");
  }
}
let ceo = new CEO('Somchai','Sudlor', 30000);

ceo.hello()
console.log(ceo.getSalary())