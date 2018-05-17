import '../styles/styles.css'
import $ from 'jquery'
import 'bootstrap'
import 'popper.js'
import dt from 'datatables.net-bs4'
import 'bootstrap-select'
const addrTh = require('../assets/thailand-address.json')
const addrEn = require('../assets/thailand-address-en.json')
import {
  getThailandAddress
} from './feature1/feature'
// import {
//   bing_web_search
// } from './feature2/feature2'


$(document).ready(function() {

  let addrListTh = getThailandAddress(addrTh)
  let addrListEn = getThailandAddress(addrEn)

  for(let addr of addrListTh) {
    $('.selectpicker').append(`<option data-tokens="${addr.name}">${addr.name}</option>`)
  }

  $('.selectpicker').selectpicker({
    size: 4
  }).selectpicker('refresh')

  // Public search images
  $('.dropdown-menu li').click(function(e) {
    let kw = ''
    for(let addr of addrListTh) {
      if(addr.name === $(e.target).text()) {
        let indexAddr = addr.pid - 10
        console.log(addrListEn[indexAddr])
        console.log(indexAddr)
        kw = addrListEn[indexAddr].name
      }
    }
    console.log(kw)
    $.ajax({
      url: `https://contextualwebsearch-websearch-v1.p.mashape.com/api/Search/ImageSearchAPI?q=${kw}&count=1&autoCorrect=false`,
      type: "GET",
      dataType: "json",
      headers: { 
                  "X-Mashape-Key": "ULsP0s5ii9mshVVKjsuzJfboTh3Vp1hnbPcjsnkNOX3vln84bc",
                  "X-Mashape-Host": "contextualwebsearch-websearch-v1.p.mashape.com"
                }
    }).then(function(res) {
      console.log(res)
      // $('#province-img').append(`<img height="75px" width="75px" src="${res[0].url}">`)
    })
  })
  

  // console.log($('.filter-option-inner-inner').text())

  // $('.dropdown-menu li').change(function() {
  //   console.log($('.filter-option-inner-inner').val())
  // })

  // $('.dropdown-menu li').bind('changeData', function(e){
  //   // e.target?
  //   console.log($('.filter-option-inner-inner').val())
  //   console.log('fff')
  // });


  
  

})


