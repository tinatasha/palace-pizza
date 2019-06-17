var pizzaSize = $("#size").val();
var pizzaSizeValue = parseInt(pizzaSize);
if(pizzaSizeValue == Large){
    return 1000
}
else if(pizzaSizeValue == Medium){
    return 800
}
else{
    return 600
};

var pizzaCrust = $("#crust").val();
var pizzaCrustValue = parseInt(pizzaCrust);
if(pizzaCrustValue == Thick){
    return 200
}
else if(pizzaCrustValue == Stuffed){
    return 100
}
else{
    return 50
};
$('#top1').click(function () {
    var toppingsValue1 = $(':checked').map(function () {
        return this.value;
    }).get();
    console.log(toppingsValue);
});

$('#top2').click(function () {
    var toppingsValue2 = $(':checked').map(function () {
        return this.value;
    }).get();
    console.log(toppingsValue2);
});

$('#top3').click(function () {
    var toppingsValue3 = $(':checked').map(function () {
        return this.value;
    }).get();
    console.log(toppingsValue3);
});

var pizzaNo = $("#pizzaNumber").value();
var actualPizzaNo = parseInt(pizzaNo);

var pizzaDelivery = $("#delivery").val();
var actualPizzaDelivery = parseInt(pizzaDelvery);
if(actualPizzaDelivery == "Yes"){
    alert("Delivery costs Ksh. 500");
    prompt("Enter your destination");
alert("your order will be delivered to your location");
};
 
$("#checkout").click(function(){
var finalPrize = document.querySelector("#finalPrize");

$("#finalOrder")
});