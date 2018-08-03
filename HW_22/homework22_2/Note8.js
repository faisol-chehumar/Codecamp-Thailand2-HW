const { Samsung } = require('./Samsung')

class Note8 extends Samsung {
  constructor() {
    super('Galaxy Note8')
  }
  UsePen () {

  }
}

module.exports.Note8 = Note8