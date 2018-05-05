$(document).ready(function() {
    $('#product-price').keyup(function() {
        // let numberStr = $('#product-price').val().replace(/,/g, '')
        // let commaPos = numberStr.length - 3
        // let commaNum = Math.floor(numberStr.length/3)

        
        // if(numberStr.length % 3 === 0) {
        //     commaNum -= 1
        // }

        // for(let i = commaNum; i > 0; i--) {
            
        //     numberStr = numberStr.splice(commaPos, 0, ',')
            
        //     commaPos -= 3
        // }

        // $('#product-price').val(numberStr)
        // console.log(numberStr)
        let newNumber = numberWithCommas($('#product-price').val().replace(/,/g, ''))
        $('#product-price').val(newNumber)
    })
})

// String.prototype.splice = function(start, delCount, newSubStr) {
//     return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
// };

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
