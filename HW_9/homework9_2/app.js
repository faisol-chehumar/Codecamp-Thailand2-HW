const fs = require('fs')
const robotSourcePath = './../codecamp2/homework/Day8_nodejs/homework8_1/'

buildRobot(['head', 'body', 'leg', 'feet'])

function buildRobot(robotPartList) {
  
  let allRobotPart = robotPartList.map(part => createRobotPart(part))

  Promise.all(allRobotPart)
    .then((result) => {
      let allRobotPart = ''
      result.map((part) => {
        allRobotPart += part
      })
      fs.writeFile('robot.txt', allRobotPart, 'utf8', (err) => {
        if(err) {
          console.error(err)
        }
      })
    })
    .catch((err) => {
      console.log(err)
    })
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
