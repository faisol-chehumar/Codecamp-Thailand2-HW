$(document).ready(function() {
  setTable('#peopleTable', ['name', 'gender', 'info'])
})

function setTable(tableId, columnName) {

  setTableColumn(tableId, columnName)

	$.get(`https://swapi.co/api/people/`)
	  .then(function(res) {
      setTableRow(tableId, columnName, res.results)
		})
}

function setTableColumn(tableId, columnName) {
  let columnHeader = ''
  for(name of columnName) {
    columnHeader += `<th>${name}</th>`
  }
  $(tableId).append(`<tr>${columnHeader}</tr>`)
}

function setTableRow(tableId, columnName, peopleList) {
  peopleList.forEach( (people, index = 0) => {
    let tableData = ''
    for(key in people) {
      if($.inArray(key, columnName)>-1) {
        tableData += `<td>${people[key]}</td>`
      }
    }
    tableData += `<td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="showPeopleDetail(${index+1})">View</button></td>`
    $(tableId).append(`<tr>${tableData}</tr>`)    
  });
}

function showPeopleDetail(id) {
  $.get(`https://swapi.co/api/people/${id}/`)
  .then(function(res) {
    let peopleDetail = `
      <p>Name: ${res.name}</P>
      <p>Gender: ${res.gender}</P>
      <p>Height: ${res.height}</P>
    `
    $('.modal-body').append(peopleDetail)

    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })

    $('.btn-secondary').click(() => {
      $('.modal-body').empty()
    })

  })
}