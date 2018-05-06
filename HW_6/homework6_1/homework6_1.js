$(document).ready(function() {
  $('#inlineFormCustomSelect').change(function() {
    let selectClass = $('#inlineFormCustomSelect option:selected').text().replace(' ', '-').toLocaleLowerCase()
    // console.log(selectClass)
    $('body').removeClass()
    $('body').addClass(selectClass)
  })
})