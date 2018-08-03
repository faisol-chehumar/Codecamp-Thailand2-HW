const { Samsung } = require('./Samsung')

class S8 extends Samsung {
  constructor() {
    super('Galaxy S8')
  }
}

module.exports.S8 = S8