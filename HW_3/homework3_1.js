$(document).ready(() => {
    fetch('../HW_2/homework2_1.json').then(response => {
        return response.json();
     })
     .then(myJson => {
        // console.log(myJson);
        let employees = myJson
        addYearSalary(employees[0])
        addNextSalary(employees[0])
        console.log(employees)
     })
     .catch(error => {
        console.error('Error:', error);
     });
     
})

function addYearSalary(row) {
    row.yearSalary = row.salary * 12
}

function addNextSalary(row) {
    let baseSalary = row.salary
    let newSalary = []
    for(let i = 0; i < 3; i++) {
        newSalary.push(baseSalary)
        baseSalary = baseSalary * 110/100
    }
    row.nextSalary = newSalary
}