// function cloneObj(obj) {
//     if(Array.isArray(obj)) {

//     } else {

//     }
// }

function cloneArray(arr) {
    let newArray = []
    for(row in arr) {
        newArray.push(arr[row])
    }
    return newArray
}

function cloneObject(obj) {
    let newObject = {}
    //let keyList = Object.keys(obj)
    for(row in obj) {
        newObject[row] = obj[row]
    }
    return newObject
}

function isPlainObject(input){
    return input && !Array.isArray(input) && typeof input === 'object';
 }

function cloneObj(data) {
    if(Array.isArray(data)) {
        return cloneArray(data)
    }
    if(isPlainObject(data)) {
        return cloneObject(data)
    }
    else {
        return data
    }
}

let test1 = [1, 2, 3]
let clonetest1 = cloneObj(test1)

let test2 = {name: 'Faisol Chehumar', greeting: 'Hello World'}
let clonetest2 = cloneObj(test2)

let test3 = [1,2,{a:1,b:2}]
let clonetest3 = cloneObj(test3)

let test4 = [1,2,{a:1,b:{c:3,d:4}}]
let clonetest4 = cloneObj(test4)

console.log(test1)
console.log(clonetest1)

console.log(test2)
console.log(clonetest2)

console.log(test3)
console.log(clonetest3)

clonetest4 = [1,2,{a:1,b:{c:3,d:4, e:5}}]

console.log(test4)
console.log(clonetest4)


