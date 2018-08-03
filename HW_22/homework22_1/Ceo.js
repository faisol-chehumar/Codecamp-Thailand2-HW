const { Employee } = require('./Employee.js')

class CEO extends Employee {
  constructor(firstname, lastname, salary) {
      super(firstname, lastname, salary);
      this.dressCode = 'suit';
  }
  getSalary(){  // simulate public method
      return super.getSalary()*2;
  };
  work (employee) {  // simulate public method
      this._fire(employee);
      this._hire(employee);
      this._seminar();
      this._golf();
  }
  increaseSalary(employee, newSalary) {
    if(employee.setSalary(newSalary) === false) {
        console.log(`${employee.getName()}'s salary is less than before!!`)
        return
    }
    console.log(`${employee.getName()}'s salary has been set to ${newSalary}`)
  }
  _seminar () {
    console.log(`He is going to seminar Dress with :${this.dressCode}`)
  }
  _golf () { // simulate private method
      this.dressCode = 'golf_dress';
      console.log("He goes to golf club to find a new connection." + " Dress with :" + this.dressCode);
  };
  _fire (employee) {
    const dressCode = 'tshirt'
    console.log(`${employee.getName()} has been fired! Dress with :${dressCode}`)
  }
  _hire (employee) {
    const dressCode = 'tshirt'
    console.log(`${employee.getName()} has been hired back! Dress with :${dressCode}`)
  }
  gossip (employee, text) {
    console.log(`Hey ${employee.getName()}, ${text}`)
  }

}

module.exports.CEO = CEO