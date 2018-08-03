const { MobilePhone } = require('./MobilePhone.js')

class Samsung extends MobilePhone {
  constructor(model) {
    super('Samsung')
    this.model = model
  }
  UseGearVR () {

  }
  TransformToPC () {

  }
  GooglePlay() {

  }
}

module.exports.Samsung = Samsung