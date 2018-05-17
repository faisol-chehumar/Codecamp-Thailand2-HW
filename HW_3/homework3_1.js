$(document).ready(() => {
    fetch('../HW_2/homework2_1.json').then(response => {
        return response.json();
     })
     .then(myJson => {
        console.log(myJson);
        let employees = myJson
        addAdditionalFields(employees)
        console.log(employees)
        buildTable(employees)
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

function addAdditionalFields(employeesList) {
    for(row in employeesList) {
        addYearSalary(employeesList[row])
        addNextSalary(employeesList[row])
    }
}

function buildTable(peopleData) {
    
    // Make column title
    let columnName = Object.keys(peopleData[0])
    for(columnIndex in columnName) {
        $('#column-header').append($(`<th>${columnName[columnIndex]}</th>`))
    }
    // console.log(columnName)
    
    // Make table data
    for(people in peopleData) {
        $('#people-table').append($(`<tr id="row-${people}"></tr>`))
        for(data in peopleData[people]) {
            // console.log(data)
            if(data !== 'nextSalary') {
                $(`#row-${people}`).append($(`<td>${peopleData[people][data]}</td>`))
            }
            if(data === 'nextSalary') {
                let salaryLists = ''
                for(salaryIndex in peopleData[people][data]) {
                    salaryLists += `<li>${peopleData[people][data][salaryIndex]}</li>`
                }
                // console.log(salaryLists)
                $(`#row-${people}`).append($(`<td><ol>${salaryLists}</ol></td>`))
            }
        }
    }
}