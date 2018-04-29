
$(document).ready(() => {
    let peopleSalary = [
        {
            "id": "1001",
            "firstname": "Luke",
            "lastname": "Skywalker",
            "company": "Walt Disney",
            "salary": "40000"
        },
        {
            "id": "1002",
            "firstname": "Tony",
            "lastname": "Stark",
            "company": "Marvel",
            "salary": "100000"
        },
        {
            "id": "1003",
            "firstname": "Somchai",
            "lastname": "Love2work",
            "company": "Walt Disney",
            "salary": "20000"
        },
        {
            "id": "1004",
            "firstname": "Monkey D",
            "lastname": "Luffee",
            "company": "One piece",
            "salary": "900000"
        }
    ]


    // Change salary number to array
    for(people in peopleSalary) {
        let oldSalary = Number.parseInt(peopleSalary[people].salary)
        let newSalary = []
        
        debugger;
        for(let i = 0; i <=2; i++) {
            newSalary.push(oldSalary)
            oldSalary += oldSalary * (10/100)
        }
        peopleSalary[people].salary = newSalary 
    }

    // console.log(peopleSalary)
    
    // Make column title
    let columnName = Object.keys(peopleSalary[0])
    for(columnIndex in columnName) {
        if(columnName[columnIndex] !== 'company') {
            $('#column-header').append($(`<th>${columnName[columnIndex]}</th>`))
        }
    }
    
    // Make table data
    for(people in peopleSalary) {
        $('#people-table').append($(`<tr id="row-${people}"></tr>`))
        for(data in peopleSalary[people]) {
            if(data !== 'company' && data !== 'salary') {
                $(`#row-${people}`).append($(`<td>${peopleSalary[people][data]}</td>`))
            }
            if(data === 'salary') {
                let salaryLists = ''
                for(salaryIndex in peopleSalary[people][data]) {
                    salaryLists += `<li>${peopleSalary[people][data][salaryIndex]}</li>`
                }
                // console.log(salaryLists)
                $(`#row-${people}`).append($(`<td><ol>${salaryLists}</ol></td>`))
            }
        }
    }
})
