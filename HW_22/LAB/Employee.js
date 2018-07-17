class Employee {
  constructor(firstname, lastname, salary) {
    let _salary = salary; // simulate private variable
    let _counter = 0

    this.firstname = firstname; // public property
    this.lastname = lastname; // public property
    this.getcounter = function() {
      return _counter
    }
    this.getSalaryPrivate = function() {
      return _salary
    }
    this.increase = function() {
      _counter += 1
    }
  }

  getSalary() { // simulate public method
    return this.getSalaryPrivate()
  }

  hello() { // simulate public method
    console.log("Hello "+this.firstname+"!");
  }
}

exports.Employee = Employee
// let dang = new Employee('Dang','Red', 10000);
// console.log(dang.firstname); // Dang
// console.log(dang.lastname); // Red
// dang.hello(); // Hello Dang!
// console.log(dang.getSalary()); // 10000
// dang.increase();
// dang.increase();
// dang.increase();

// console.log(dang.getcounter())

// let dum = new Employee('Dum','Kerng', 50000);

// dum.increase()
// dum.increase()

// console.log(dum.firstname); // dum
// console.log(dum.lastname); // Red
// dum.hello(); // Hello dum!
// console.log(dum.getSalary()); // 10000
// console.log(dum.getcounter())

