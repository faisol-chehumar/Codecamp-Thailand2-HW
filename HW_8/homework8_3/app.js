$(document).ready(() => {

  // let img1 = 'http://www.effigis.com/wp-content/uploads/2015/02/Iunctus_SPOT5_5m_8bit_RGB_DRA_torngat_mountains_national_park_8bits_1.jpg'
  // let img2 = 'http://www.effigis.com/wp-content/uploads/2015/02/Infoterra_Terrasar-X_1_75_m_Radar_2007DEC15_Toronto_EEC-RE_8bits_sub_r_12.jpg'
  // let img3 = 'http://www.effigis.com/wp-content/uploads/2015/02/DigitalGlobe_WorldView1_50cm_8bit_BW_DRA_Bangkok_Thailand_2009JAN06_8bits_sub_r_1.jpg'
  $('#myModal').modal('show')
  let progress = 0

  // console.log($('img-1'))
 
  $('#img-1').on('load', function(){
    console.log('img1 success')
    updateProgress()
	}).on('error', function(){
		console.log('img1 not success')
  })

  $('#img-2').on('load', function(){
    console.log('img2 success')
    updateProgress()
	}).on('error', function(){
		console.log('img2 not success')
  })

  $('#img-3').on('load', function(){
    console.log('img3 success')
    updateProgress()
	}).on('error', function(){
    console.log('img3 not success')
    updateProgress()
  })


  fetch('homework2_1.json')
    .then((res) => {
      console.log('res success')
      updateProgress()
      return res.json()
    })
    .then((data) => {
      // console.log(data)

      buildTable('#person-table', data)
    })

    function buildTable(tableId, data) {
      addDataToTable(tableId, 'th', data)
      addDataToTable(tableId, 'td', data)
    }
  
    function addDataToTable(tableId, tableSection, data) {
  
      let tableTemplate = ''
      const tableData = (tableSection === 'th') ? Object.keys(data[0]) : data.map(x => Object.values(x))
  
      tableData
        .map((dataRow) => {
          if(typeof dataRow === 'object') {
            let rowTemplate = ''
            dataRow
              .map((dataCell) => {
                if(typeof dataCell === 'object') {
                  let listItem = ''
                  dataCell.map((d) => {
                    listItem += `<li>${d.name}</li>`
                  })
                  dataCell = listItem
                }
                rowTemplate += `<${tableSection}>${dataCell.charAt(0).toUpperCase() + dataCell.slice(1)}</${tableSection}>`
              })
            tableTemplate += `<tr>${rowTemplate}</tr>`
          } else {
            tableTemplate += `<th>${dataRow.toUpperCase()}</th>`
          }
        })
      $(tableId).append(`<tr>${tableTemplate}</tr>`)
    }

    function updateProgress() {
      progress += 25
      $('.progress-bar')
        .attr('aria-valuenow', progress)
        .attr('style', `width: ${progress}%`)
      console.log(progress)
      if(progress === 100) {
        $('#loading-status').text('Done')
        $('#myModal').modal('hide')
      }
    }
})