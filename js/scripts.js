$(document).ready(function(){
$("#yesButton").click(function(){
alert("Delivery cost is Ksh 500");
prompt("Enter your location");
});
$("#noButton").click(function(){
alert("Remember to try our delivery services next time")
});
$("#totalAmount").hide();
$("#finalOrder").hide();
$("#checkout").click(function(){
    $("#totalAmount").show();
$("#finalOrder").show();
});
$("#ok").click(function(){
alert("Your order will be delivered to your location");
});
});