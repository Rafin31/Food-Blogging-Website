function reviewButton() {
    var val = document.getElementById("review_Button").innerHTML;
    if (val == "Show more") {
        document.getElementById("review_Button").innerHTML = "Show Less";
    } else
        document.getElementById("review_Button").innerHTML = "Show More";
}

function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var massage = document.getElementById("message").value;
    console.log(name);
    console.log(email);
    console.log(massage);

    if (name == "" || email == "" || massage == "") {
        {
            alert("Please Fill all the fields");
            console.log("1");
        }

    } else {
        if (ValidateEmail(email)) {
            alert("Thank you for your feedback");
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            console.log("2");
        } else {
            alert("Put valid email address");
            console.log("3");
        }


    }
}

function ValidateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email) == false) {
        return false;

    } else
        return true;


}