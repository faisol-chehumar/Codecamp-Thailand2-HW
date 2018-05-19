const fs = require('fs')
const robotSourcePath = './../codecamp2/homework/Day8_nodejs/homework8_1/'

buildRobot(['head', 'body', 'leg', 'feet'])

async function buildRobot(robotPartList) {
  try {
    let allRobotPart = ''
    for(part of robotPartList) {
      allRobotPart += await createRobotPart(part)  
    }
    await compoundRobot(allRobotPart)
  } catch(error) {
    console.error(error)
  }
}

function createRobotPart(part) {
  return new Promise(function(resolve, reject) {
    fs.readFile(`${robotSourcePath}${part}.txt`, 'utf8', (err, data) => {
      if(err) {
        reject(err)
      } else {
        resolve(data + '\n')
      }
    })
  })
}

function compoundRobot(allRobotPart) {
  return new Promise(function(resolve, reject) {
    fs.writeFile('robot.txt', allRobotPart, 'utf8', (err) => {
      if(err) {
        reject(err)
      } else {
        resolve('Complete build Robot!')
      }
    })
  })
}