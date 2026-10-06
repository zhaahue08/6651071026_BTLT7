$(document).ready(function() {
    $("#form1").submit(function(e) {
        e.preventDefault();
        var firstName = $("input[name='fname']").val();
        var lastName = $("input[name='lname']").val();
        alert(firstName + " " + lastName);
    });
});