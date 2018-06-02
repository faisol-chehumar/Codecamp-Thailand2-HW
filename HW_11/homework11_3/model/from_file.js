const {promisify} = require('util')
const fs = require('fs')
const readFile = promisify(fs.readFile)

async function getDataFromFile() {
  let dataJson = await readFile('./data/data.json')
  return dataJson
}

module.exports.getDataFromFile = getDataFromFile