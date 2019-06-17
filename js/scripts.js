var pizzaSize = $("#size").val();
var pizzaSizeValue = parseInt(pizzaSize)
if(pizzaSizeValue == Large){
    return 1000
}
else if(pizzaSizeValue == Medium){
    return 800
}
else{
    return 600
};
