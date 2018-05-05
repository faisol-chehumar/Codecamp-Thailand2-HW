$(document).ready(function() {
	$.get('https://swapi.co/api/people/').then(function(res) {
		let peopleLists = res.results
		for(people in peopleLists) {
			let tableRow = `
			<td>${peopleLists[people].name}</td>
			<td>${peopleLists[people].height}</td>
			<td>${peopleLists[people].mass}</td>
			<td>${peopleLists[people].hair_color}</td>
			<td>${peopleLists[people].skin_color}</td>
			`

			$('.table tbody').append(`<tr>${tableRow}</tr>`)
			
		}
	})
})
