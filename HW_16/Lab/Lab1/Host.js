class Host {
  constructor(name, gender, greetTxt) {
    this.name = name,
    this.gender = gender,
    this.greetTxt = greetTxt
  }

  greeting() {
    console.log(`Hello, Welcome to West world!, My name is ${this.name}.`)
  }
}

module.exports = Host
