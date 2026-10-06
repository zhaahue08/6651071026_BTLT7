function getFormvalue() {
    var form = document.getElementById("form1");
    var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;

    alert(firstName + " " + lastName);
    console.log("Họ và tên: " + firstName + " " + lastName);
}