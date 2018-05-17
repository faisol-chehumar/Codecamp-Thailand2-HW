$(document).ready(() => {
  let peopleSalary = fetch('./../../HW_2/homework2_1.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let peopleLowSalary = data
        .filter(x => x.salary < 100000)
        .map(x => x.salary = x.salary * 2)

      let sumSumary = data
        .reduce((totalSalary, x) => {
          return totalSalary + Number.parseInt(x.salary)
        }, 0)

      console.log(data)
      
      let rowData = ''
      let row = data.map((currentValue, index) => {
        rowData += `<tr>
                      <td>${currentValue.id}</td>
                      <td>${currentValue.firstname}</td>
                      <td>${currentValue.lastname}</td>
                      <td>${currentValue.salary}</td>
                    </tr>`
      })

      $('#salary-table').append(`<tr>${rowData}</tr>
      <tr>
      <td colspan="3"><b>Total Salary</b></td>
      <td><b>${sumSumary}</b></td></tr>`)
    })
})
