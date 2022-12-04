$('form').submit(function () {
    var name = $.trim($('#lname').val());
    var email =$.trim($('#email').val());

    if (name === '') {
        alert('First name is empty.');
        return false;
    }
    else if (email === '') {
        alert('email is empty.');
        return false;
    }
});