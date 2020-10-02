let input = document.getElementById('user_avatar');
let label = document.getElementById('user_avatar_label');
const labelText = label.innerHTML;

input.addEventListener('change', function (e) {
    label.innerHTML = e.target.value.split('\\').pop();

    let reader = new FileReader();

    if (e.target.value.length == 0) {
        document.getElementById('user_avatar_img').setAttribute('src', "");
        label.innerHTML = labelText;
    } else {
        reader.onload = function (event) {
            document.getElementById('user_avatar_img').setAttribute('src', event.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }

});