function hello6(err, value) {
  callbackValue = value;
  console.log(callbackValue); // print callbackValueNew after 3 seconds
}
callbackValue = 'callbackValueOld';
function tryHello6(callbackFunction) {
  let returnValue = 'returnValue';
  let callbackValue = 'callbackValueNew';
  setTimeout(callbackFunction, 3000, null, callbackValue);
  return returnValue;
}
console.log(tryHello6(hello6)); // print returnValue
console.log(callbackValue); // print callbackValueOld
console.log(hello6(null, 'tes'))

// HW4_4 must be parallel not sqauence
