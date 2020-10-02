const bad_color = "#ff6666";
const good_color = "#66cc66";

const element = document.getElementById("log_in_submit");
if(element !== null){
    document.getElementById('log_in_submit').addEventListener('click', function (e) {
        if(!isValid()){
            e.preventDefault();
        }
    });
}

function isValid(){
    return isAllFieldsFilled();
}

function isAllFieldsFilled(){
    let valid = true;
    $(".log_input").each(function () {
        if ($(this).find("input")[0].value.length === 0) {
            addStylesToNotValidField( $(this).find("input")[0]);
            valid = false;
        } else {
            addStylesToValidField( $(this).find("input")[0]);
        }
    });
    return valid;
}

function addStylesToNotValidField(field){
    field.style.borderColor = bad_color;
}

function addStylesToValidField(field){
    field.style.borderColor = good_color;
}


