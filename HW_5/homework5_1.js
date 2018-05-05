$(document).ready(function() {
    $('#submit').click(function() {
        let email = $('#email').val()
        // console.log(isEmailValid(email))
        if(!isEmailValid(email)) {
            $('.text-alert').append('Email is invalid format').css('color', '#bd0f0f')
        }
    })
})


function isEmailValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
