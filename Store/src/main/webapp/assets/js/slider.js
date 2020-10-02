let sliderRange = $("#slider-range");
let lowerPrice = $("#lower-price");
let upperPrice = $("#upper-price");

$(function () {
    let max = parseInt($('#max-product-price').val());
    sliderRange.slider({
        range: true,
        min: 0,
        max: max,
        values: [0, max],
        slide: function (event, ui) {
            lowerPrice.val(ui.values[0]);
            upperPrice.val(ui.values[1]);
        }
    });
    sliderRange.slider("values", 0, lowerPrice.val());
    sliderRange.slider("values", 1, upperPrice.val());
});

lowerPrice.on('change', function () {
    sliderRange.slider("values", 0, $(this).val());
});
upperPrice.on('change', function () {
    sliderRange.slider("values", 1, $(this).val());
});