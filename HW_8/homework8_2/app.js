let fs = require('fs')

function buildRobot(robotPart, robot='') {
  // fs.readFile(`./../codecamp2/homework/Day8_nodejs/homework8_1/${robotPart[0]}.txt`, 'utf8', (err, data) => {
  //   if(err) {
  //     console.error(err)
  //     return
  //   }
  //   console.log(data)
  //   robot += data + '\n'
  //   if(robotPart.length > 1) {
  //     robotPart.shift()
  //     buildRobot(robotPart, robot)
  //   } else {
  //     fs.writeFile('robot.txt', robot, 'utf8')
  //   }
  // })
  // return robot
  function buildPart(err, data) {
    // console.log(robot)
    if(err) {
      console.error(err)
      return
    }
    console.log(data)
    robot += data + '\n'
    if(robotPart.length > 1) {
      robotPart.shift()
      buildRobot(robotPart, robot)
    } else {
      fs.writeFile('robot.txt', robot, 'utf8')
    }
  }
  // console.log(robotPart)
  // robotPart.reduce(addRobotPart)
  // console.log(test)
  fs.readFile(`./../codecamp2/homework/Day8_nodejs/homework8_1/${robotPart[0]}.txt`, 'utf8', buildPart)
// }

// function addRobotPart(robot, part) {
//   console.log(part)
//   // let partData = ''
//   // fs.readFile(`./../codecamp2/homework/Day8_nodejs/homework8_1/${part}.txt`, 'utf8', (err, data) => {
//   //   console.log(data)
//   //   // partData += data
//   // })
//   // return robot + partData
}



buildRobot(['head', 'body', 'leg', 'feet'])