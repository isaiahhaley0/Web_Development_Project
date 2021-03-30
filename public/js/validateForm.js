function checkPassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;



    //if password not entered at all 
    if (password1 == '') {
        alert("Please enter a password");
        return false;

    }
    re = /^.*?(?=[\^#%&$\*:<>\?/\{\|\}]).*$/;
    if (re.test(form.password1.value)) {
        alert("Error: Invalid character used in password.")
        return false;
    }
    re = /^.*?(?=[\^#%&$\*:<>\?/\{\|\}]).*$/;
    if (re.test(form.Username.value)) {
        alert("Error: Invalid character used in username.")
        return false;
    }
    re = /[0-9]/;
    if (!re.test(form.password1.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        form.password1.focus();
        return false;
    }
    re = /[a-z]/;
    if (!re.test(form.password1.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        form.password1.focus();
        return false;
    }
    re = /[A-Z]/;
    if (!re.test(form.password1.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        form.password1.focus();
        return false;
    }
    //if secondary password not entered
    else if (password2 == '') {
        alert("Please confirm password");
        return false;
    }
    //if not the same return error 
    else if (password1 != password2) {
        alert("Error: Passwords do not match. Please try re-entering passwords");
        return false;
    }
    //if they are the same allow passwords
    else {
        // alert("Thank you for signing up for Vibez.")
        return true;
    }

}



