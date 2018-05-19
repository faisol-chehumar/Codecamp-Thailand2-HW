let fs = require('fs')

fs.readFile('./../codecamp2/homework/Day8_nodejs/homework8_1/head.txt', 'utf8', (err, data) => {
  let robot = ''
  robot += data + '\n'
  fs.readFile('./../codecamp2/homework/Day8_nodejs/homework8_1/body.txt', 'utf8', (err, data) => {
    robot += data + '\n'
    fs.readFile('./../codecamp2/homework/Day8_nodejs/homework8_1/leg.txt', 'utf8', (err, data) => {
      robot += data + '\n'
      fs.readFile('./../codecamp2/homework/Day8_nodejs/homework8_1/feet.txt', 'utf8', (err, data) => {
        robot += data + '\n'
        fs.writeFile('robot.txt', robot, 'utf8')
      })
    })  
  })
})

