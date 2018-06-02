const mysql = require('mysql2/promise')
const fetch = require('isomorphic-unfetch')
const { promisify } = require('util')

const pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'secret',
  database        : 'codecamp'
})

// updateStaff()



async function updateStaff() {
  let staffData = (await (await fetch('https://randomuser.me/api/')).json())
  let staffFirstName = capitalizeFirstLetter(staffData.results[0].name.first)
  let staffLastName = capitalizeFirstLetter(staffData.results[0].name.last)
  let staffAge = calcAge(staffData.results[0].dob)
  let dataArr = [staffFirstName, staffLastName, staffAge]

  insertData('tbl_staff', dataArr)
}

async function insertData(tblName, data) {
  await pool.query(`INSERT INTO ${tblName} (first_name, last_name, age) VALUES ('${data[0]}', '${data[1]}', '${data[2]}')`)
  console.log('Insert completed')
}

function calcAge(dateString) {
  let birthday = +new Date(dateString)
  return ~~((Date.now() - birthday) / (31557600000))
}

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports.updateStaff = updateStaff