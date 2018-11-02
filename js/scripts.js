// Business Logic
function Pizza(size, topping) {
  this.size = size,
  this.toppings = topping
}

Pizza.prototype.PriceOfPizza = function() {

}


// User Interface Logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var selectedSize = $("#size").attr('selected',true).val();
    var sellectedTopping = $("input:radio[name=topping]:checked").val();

    $("#size").val("");
    $("input:radio[name=topping]:checked").val("");

    var newPizza = new Pizza(selectedSize, sellectedTopping, inputtedTime);


  });
});
