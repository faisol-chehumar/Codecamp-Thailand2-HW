$(document).ready(() => {
    fetch('../HW_2/homework2_1.json').then(response => {
        return response.json();
     })
     .then(myJson => {
        // console.log(myJson);
        let employees = myJson
        let newEmployees = addAdditionalFields(employees)
        console.log(employees)
        // console.log(newEmployees)
        buildTable('#original-column-header', '#original-people-table', employees)
        buildTable('#new-column-header', '#new-people-table', newEmployees)
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
    let tmpEmployeesList = []
    for(row in employeesList) {
        let obj = {}
        for(data in employeesList[row]) {
            // console.log(data)
            obj[data] = employeesList[row][data]
        }
        tmpEmployeesList.push(obj)
    }
    for(row in tmpEmployeesList) {
        addYearSalary(tmpEmployeesList[row])
        addNextSalary(tmpEmployeesList[row])
    }
    return tmpEmployeesList
}

function buildTable(elmHeader, elmBody, peopleData) {
    
    // Make column title
    let columnName = Object.keys(peopleData[0])
    for(columnIndex in columnName) {
        $(elmHeader).append($(`<th>${columnName[columnIndex]}</th>`))
    }
    // console.log(columnName)
    // console.log(peopleData)
    
    // Make table data
    for(people in peopleData) {
        $(elmBody).append($(`<tr id="row-${elmHeader.substring(1)}-${people}"></tr>`))
        for(data in peopleData[people]) {
            // console.log(data)
            if(data !== 'nextSalary') {
                $(`#row-${elmHeader.substring(1)}-${people}`).append($(`<td>${peopleData[people][data]}</td>`))
                // console.log(data)
            }
            if(data === 'nextSalary') {
                let salaryLists = ''
                for(salaryIndex in peopleData[people][data]) {
                    salaryLists += `<li>${peopleData[people][data][salaryIndex]}</li>`
                }
                // console.log(salaryLists)
                $(`#row-${elmHeader.substring(1)}-${people}`).append($(`<td><ol>${salaryLists}</ol></td>`))
            }
        }
    }
}