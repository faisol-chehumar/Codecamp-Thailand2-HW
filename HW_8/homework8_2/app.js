let fs = require('fs')

// fs.readFile('./../codecamp2/homework/Day8_nodejs/homework8_1/head.txt', 'utf8', (err, data) => {
//   let robot = ''
//   robot += data + '\n'
//   fs.readFile('./../codecamp2/homework/Day8_nodejs/homework8_1/body.txt', 'utf8', (err, data) => {
//     robot += data + '\n'
//     fs.readFile('./../codecamp2/homework/Day8_nodejs/homework8_1/leg.txt', 'utf8', (err, data) => {
//       robot += data + '\n'
//       fs.readFile('./../codecamp2/homework/Day8_nodejs/homework8_1/feet.txt', 'utf8', (err, data) => {
//         if(err) {
//           console.error(error)
//           return
//         }
//         console.log(data)
//         robot += data + '\n'
//         fs.writeFile('robot.txt', robot, 'utf8')
//       })
//     })  
//   })
// })

buildRobot(['head', 'body', 'leg', 'feet'])

function buildRobot(robotPart, robot = '') {
  fs.readFile(`./../codecamp2/homework/Day8_nodejs/homework8_1/${robotPart[0]}.txt`, 'utf8', (err, data) => {
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
  })
  return robot
}

