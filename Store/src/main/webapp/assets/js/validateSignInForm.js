const lowerCase = /^(?=.*[a-z])/;
const upperCase = /(?=.*[A-Z])/;
const number = /(?=.*\d)/;
const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const bad_color = "#ff6666";
const good_color = "#66cc66";

function checkPass() {
    const password = document.getElementById('user_password');
    const confirm = document.getElementById('user_password_confirm');
    let message = document.getElementById('validation_message');
    let errorMessage = "";
    if (!lowerCase.test(password.value)) {
        errorMessage += "Password must contain at least 1 lowercase alphabetical character<br>";
    }
    if (!upperCase.test(password.value)) {
        errorMessage += "Password must contain at least 1 uppercase alphabetical character<br>";
    }
    if (!number.test(password.value)) {
        errorMessage += "Password must contain at least 1 numeric character<br>";
    }
    message.innerHTML = errorMessage;
    const button = document.getElementById('sign_in_submit');
    addStylesValidation(message, password, confirm, button);
}

function jQueryCheckPass() {
    const password = $('#user_password')[0];
    const confirm = $('#user_password_confirm')[0];
    let message = $('#validation_message')[0];
    let errorMessage = "";

    if (password.value !== confirm.value) {
        message.style.color = bad_color;
        errorMessage += "Passwords don't match.";
        message.append(errorMessage);
    }
    const button = $('#sign_in_submit')[0];
    addStylesValidation(message, password, confirm, button);
}

function checkEmail() {
    return email.test($('#user_email')[0].value);
}

function addStylesValidation(message, password, confirm, button) {
    if (message.innerHTML.length === 0) {
        password.style.borderColor = good_color;
        confirm.style.borderColor = good_color;
        button.disabled = false;
    } else {
        password.style.borderColor = bad_color;
        confirm.style.borderColor = bad_color;
        button.disabled = true;
    }
}

function isAllFieldsFilled() {
    let valid = true;
    $(".reg_input").each(function () {
        if ($(this).find("input")[0].value.length === 0) {
            valid = false;
            return false;
        }
    })
    return valid;
}

function buttonEnabling() {
    const button = $('#sign_in_submit')[0];
    const message = $('#validation_message')[0];
    let isErrorsEmpty = message.innerHTML.length === 0;
    let isLicenseChecked = document.getElementById("license").checked === true;
    let isAllFieldsNotEmpty = isAllFieldsFilled();
    let isFieldsValidByLength = isLengthFieldsValid();
    button.disabled = !(isErrorsEmpty && isLicenseChecked && isAllFieldsNotEmpty && isFieldsValidByLength);
}

function isLengthFieldsValid() {
    let valid = true;
    $(".reg_input").each(function () {
        if (!isFieldValid($(this).find("input"))) {
            valid = false;
            return false;
        }
    })
    return valid;
}

$('form input').keyup(function () {
    if ($(this).attr('type') === 'email') {
        if (checkEmail() && isFieldValid($(this))) {
            addStylesToValidField($(this));
        } else {
            addStylesToNotValidField($(this));
        }
    } else if ($(this).attr('type') === 'password') {
        checkPass();
        jQueryCheckPass();
        isFieldValid($(this));
    } else {
        if (isFieldValid($(this))) {
            addStylesToValidField($(this));
        } else {
            addStylesToNotValidField($(this));
        }
    }
    buttonEnabling();
});

$("input[type='checkbox']").change(function () {
    buttonEnabling();
});

function addStylesToNotValidField(field) {
    field.css("borderColor", bad_color);
    field.parent().find(".hidden_input_message").show();
}

function addStylesToValidField(field) {
    field.css("borderColor", good_color);
    field.parent().find(".hidden_input_message").hide();
}

function isFieldValid(field) {
    return field[0].value.length !== 0 && dataLengthIsValid(field);
}

function dataLengthIsValid(field) {
    if (field.attr("data-length") !== undefined) {
        return field.attr("data-length") <= field[0].value.length;
    }
    return true;
}

