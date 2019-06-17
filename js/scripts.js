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