$(".amount").bind('keyup mouseup', function () {

    let newAmount = parseInt($(this).val())

    let myJSONObject = {
        "productId": $(this).closest('tr').find("input[name='productId']").val(),
        "amount": newAmount
    };

    $.ajax({
        url: "/cart/update/amount",
        method: "post",
        contentType: "application/json",
        dataType: 'json',
        data: JSON.stringify(myJSONObject),
        success: function (data) {
            $("#cart").text("Cart:" + data.productsInCartTotalNumber + " items, " + data.productsInCartTotalCost + "$");
            $(this).closest('tr').find("input[name='initial-amount']").val(newAmount.toString());
            $("#total-cost").text(data.productsInCartTotalCost + "$");
        }
    });
});


$(".deleteProduct").on('click', function () {
    $(this).closest('form').submit();
});

$(".buyProduct").on('click', function () {
    $(this).closest('form').submit();
});
