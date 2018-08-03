
class Employee {
  constructor(firstname, lastname, salary) {
      this._firstname = firstname;
      this._lastname = lastname;
      this._salary = salary; // simulate private variable

  }
  setSalary(newSalary) { // simulate public method
      // return newSalary ถ้ามีเงินเดือนใหม่มีค่ามากกว่า this._salary
      // return false ถ้าเงินเดือนใหม่มีค่าน้อยกว่าเท่ากับ this._salary
      if(newSalary > this.getSalary ()) {
          return newSalary
      }
      return false
      
  }
  getName () {
      return this._firstname
  }
  getSalary () {  // simulate public method
      return this._salary;
  };
  work(employee) {
      // leave blank for child class to be overidden
  }
  leaveForVacation(year, month, day) {

  }
}

module.exports.Employee = Employee