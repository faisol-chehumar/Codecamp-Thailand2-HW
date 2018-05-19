const fs = require('fs')

buildRobot(['head', 'body', 'leg', 'feet'])

async function buildRobot(robotPartList) {
  try {
    let robot = ''
    for(part of robotPartList) {
      robot += await createRobotPart(part)  
    }
    fs.writeFile('robot.txt', robot, 'utf8', (err) => {
      if(err) {
        console.error(err)
      }
    })
  } catch(error) {
    console.error(error)
  }
}

function createRobotPart(part) {
  return new Promise(function(resolve, reject) {
    fs.readFile(`./../codecamp2/homework/Day8_nodejs/homework8_1/${part}.txt`, 'utf8', (err, data) => {
      if(err) {
        reject(err)
      } else {
        resolve(data + '\n')
      }
    })
  })
}