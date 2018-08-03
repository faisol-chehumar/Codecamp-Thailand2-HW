const { Employee } = require('./Employee.js')
const { CEO }  = require('./Ceo.js')

// console.log(Employee)

let somchai = new CEO("Somchai","Sudlor",30000);
let somsri = new Employee("Somsri","Sudsuay",22000);
somchai.gossip(somsri,"Today is very cold!");
somchai.work(somsri);

somchai.increaseSalary(somsri, 20);
somchai.increaseSalary(somsri, 25000);

// console.log(somsri)