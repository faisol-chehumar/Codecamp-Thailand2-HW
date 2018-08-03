const { MobilePhone } = require('./MobilePhone.js')

class Apple extends MobilePhone {
  constructor(model) {
    super('Iphone')
    this.model = model
  }
  AppStore() {

  }
}

module.exports.Apple = Apple