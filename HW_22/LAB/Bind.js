let x = 10
let myModule = {
  x: 42,
  getX: function() {
    return this.x;
  }
 }
 
 let retrieveX = myModule.getX.bind(myModule);
 console.log(retrieveX()); // The function gets invoked at the global scope
//  expected output: undefined
 
//  let boundGetX = retrieveX.bind(module);
//  console.log(boundGetX());
 // expected output: 42
 