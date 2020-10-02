$('#items-per-page').on('change', function () {
    let url = new URL(window.location.href);
    url = updateParam(url, 'items', $('#items-per-page').val());
    setLocationUrl(url);
});

$('#items-order').on('change', function () {
    let url = new URL(window.location.href);
    url = updateParam(url, 'order', $('#items-order').val());
    setLocationUrl(url);
});

function updateParam(url, name, value) {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get(name) === null) {
        appendParam(url, name, value);
    } else {
        setParam(url, name, value);
    }
    return url;
}

function appendParam(url, name, value) {
    url.searchParams.append(name, value);
}

function setParam(url, name, value) {
    url.searchParams.set(name, value);
}

function removeOldParam(urlParams, url, paramName) {
    if (urlParams.get(paramName) !== null) {
        url.searchParams.delete(paramName);
    }
}

function addNewDeveloperParams(url, urlParams) {
    let checkBoxes = $('input[name="developer"]:checked');
    removeOldParam(urlParams, url, 'developer');
    checkBoxes.each(function () {
        appendParam(url, 'developer', $(this).val());
    });
}

function addNewPlatformParams(url, urlParams) {
    let checkBoxes = $('input[name="platform"]:checked');
    removeOldParam(urlParams, url, 'platform');
    checkBoxes.each(function () {
        appendParam(url, 'platform', $(this).val());
    });
}

$("#left-search-menu").on("submit", function () {
    let url = new URL(window.location.href);
    const urlParams = new URLSearchParams(window.location.search);
    url = updateParam(url, 'product-name', $('#product_name').val());
    url = updateParam(url, 'lower-price', $('#lower-price').val());
    url = updateParam(url, 'upper-price', $('#upper-price').val());
    url = updateParam(url, 'page', 1);
    addNewDeveloperParams(url, urlParams);
    addNewPlatformParams(url, urlParams);
    setLocationUrl(url);
    return false;
});


$('.page').on('click', function () {
    let url = new URL(window.location.href);
    url = updateParam(url, 'page', this.innerHTML);
    setLocationUrl(url);
});

function saveSelectedCheckboxes(classOfElementsFromForm, userSelectedElements) {
    let formElements = document.getElementsByClassName(classOfElementsFromForm);
    for (let i = 0; i < formElements.length; i++) {
        for (let j = 0; j < userSelectedElements.length; j++) {
            if (userSelectedElements[j] === formElements.item(i).value) {
                document.getElementById(userSelectedElements[j])
                formElements.item(i).checked = true;
            }
        }
    }
}


function saveSelectedDropdownMenu(selectedValue, idOfSelect) {
    $("#" + idOfSelect + " option[value=" + selectedValue + "]").attr('selected', 'true');
}

$(document).ready(function () {
    let selectedPlatformsArray = $("#selected-platforms").val().replaceAll("[", "").replaceAll("]", "").split(", ");
    saveSelectedCheckboxes("platform", selectedPlatformsArray);
    let selectedDevelopersArray = $("#selected-developers").val().replaceAll("[", "").replaceAll("]", "").split(", ");
    saveSelectedCheckboxes("developer", selectedDevelopersArray);

    saveSelectedDropdownMenu($("#selected-items-per-page").val(), "items-per-page");
    saveSelectedDropdownMenu($("#selected-item-order").val(), "items-order");

    $(".page").each(function () {
        if ($('#active-page').val() === this.innerHTML) {
            $(this).addClass("active");
        }
    });
});


$('#next-page').on('click', function () {
    let url = new URL(window.location.href);
    let currentActive = parseInt(url.searchParams.get("page"));
    if (currentActive && currentActive < parseInt($('#amount-of-pages').val())) {
        currentActive += 1;
    }
    url = updateParam(url, 'page', currentActive);
    setLocationUrl(url);
});

function setLocationUrl(url) {
    $(location).attr('href', url)
}

$('#prev-page').on('click', function () {
    let url = new URL(window.location.href);
    let currentActive = parseInt(url.searchParams.get("page"));
    if (currentActive && currentActive > 1) {
        currentActive -= 1;
    }
    url = updateParam(url, 'page', currentActive);
    setLocationUrl(url);
});

$('.buyProduct').on('click', function () {
    let productId = $(this).attr("id");
    let JSONObject = {
        "productId": productId,
        "amount": 1
    };

    $.ajax({
        url: "/cart/add",
        method: "post",
        contentType: "application/json",
        dataType:'json',
        data: JSON.stringify(JSONObject),
        success: function (data) {
            $("#cart").text("Cart:" + data.productsInCartTotalNumber + " items, " + data.productsInCartTotalCost + "$");
        }
    });
});

