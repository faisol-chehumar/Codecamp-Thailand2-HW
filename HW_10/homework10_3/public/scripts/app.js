$(document).ready(async () => {
  let peopleSalary = (await (await fetch('data.json')).json())
})