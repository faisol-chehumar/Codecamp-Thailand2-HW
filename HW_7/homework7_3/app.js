$(document).ready(() => {
  let personList = fetch('homework1_4.json')
    .then((res) => {
      return res.json()
    }).then((res) => {
      // console.log(res)
      let targetPerson = res
        .filter((person) => {
          return person.gender === 'male' && person.friends.length >= 2
        })
        .map((x) => {
          // console.log(x.balance)
          return {
            name: x.name,
            gender: x.gender,
            company: x.company,
            email: x.email,
            friends: x.friends,
            balance: Number(x.balance.replace(/[^0-9\.-]+/g,''))
          }
        })
        .map((x) => {
          // x.balance = x.balance/10
          return {
            name: x.name,
            gender: x.gender,
            company: x.company,
            email: x.email,
            friends: x.friends,
            balance: `$${x.balance/10}`
          }
        })
      // console.log(targetPerson)
      buildTable($('#salary-table'), targetPerson)
    })
  }
)

function buildTable(tableId, data) {
  addDataToTable('#salary-table', 'th', data)
  addDataToTable('#salary-table', 'td', data)
}

function addDataToTable(tableId, tableSection, data) {

  let tableTemplate = ''
  const tableData = (tableSection === 'th') ? Object.keys(data[0]) : data.map(x => Object.values(x))

  tableData
    .map((dataRow) => {
      if(typeof dataRow === 'object') {
        let rowTemplate = ''
        dataRow
          .map((dataCell) => {
            if(typeof dataCell === 'object') {
              let listItem = ''
              dataCell.map((d) => {
                listItem += `<li>${d.name}</li>`
              })
              dataCell = listItem
            }
            rowTemplate += `<${tableSection}>${dataCell.charAt(0).toUpperCase() + dataCell.slice(1)}</${tableSection}>`
          })
        tableTemplate += `<tr>${rowTemplate}</tr>`
      } else {
        tableTemplate += `<th>${dataRow.toUpperCase()}</th>`
      }
    })
  $(tableId).append(`<tr>${tableTemplate}</tr>`)
}

