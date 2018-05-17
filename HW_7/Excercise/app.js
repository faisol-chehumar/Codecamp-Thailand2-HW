let people = ['Paul Pogba', 'David Degea', 'Mike Smalling', 'Andre Herera', 'Romero Lukaku', 'Jose Morinho']

let people2 = people.map(x => `Mr.${x}`)

let result = people
  .filter(x => x.length > 12)
  .map(x => `Hello Mr.${x}, Welcome to Westworld`)
  .reduce( (arr, x) => arr + ' | ' + x)

console.log(people2)
console.log(result)
