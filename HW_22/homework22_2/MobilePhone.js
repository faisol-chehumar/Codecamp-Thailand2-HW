class MobilePhone {
  constructor (telNumber, sms) {
    this._telNumber = telNumber
    this._sms = sms
  }

  phoneCall () {
    console.log(`Dailing... ${this._telNumber}`)
  }

  SMS () {
    console.log(`Send SMS to ${this._sms}`)
  }
  
  InternetSurfing () {
    console.log('Open chorme browser')
  }

}

module.exports.MobilePhone = MobilePhone
