let arr = [1,2,3,4,5,6,7,8,9,10]

let results = arr
  .filter(x => x % 2 === 0)
  .map(x => x * 1000)

console.log(results)