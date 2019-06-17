
$(document).ready(function(){
    $("#yesButton").click(function(){
        alert("Delivery costs Ksh.500");
        prompt("Enter your destination");
    });
    $("#noButton").click(function(){
    alert("Remember to try our delivery services next time.")
    });
    $("#checkout").click(function(){
        alert("Your order will be delivered to your location");
    });
});