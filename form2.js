function validateform() {
    let form = document.Registration;
    if (form.mobile.value == "" || isNaN(form.mobile.value) || form.mobile.value.length != 10) {
        alert("Enter Mobile No. from 0-9")
        form.mobile.focus();
        return false;
    }
};

function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    form.mobile.focus();
    return (false)
}

