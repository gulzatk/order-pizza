// Business Logic
function Pizza(size, topping) {
  this.size = size,
  this.toppings = topping
}
var price = 0;
Pizza.prototype.PriceOfPizza = function() {
  if (selectedSize === "small") {
    if (sellectedTopping === "cheese" || sellectedTopping === "veggie") {
      price = 6.39;
    } else if (sellectedTopping === "chicken") {
      price = 7.50;
    } else {
      price = 8.00;
    }
  } else if (selectedSize === "medium") {
    if (sellectedTopping === "cheese" || sellectedTopping === "veggie") {
      price = 7.39;
    } else if (sellectedTopping === "chicken") {
      price = 8.50;
    } else {
      price = 9.00;
    }
  } else if {
    if (sellectedTopping === "cheese" || sellectedTopping === "veggie") {
      price = 8.39;
    } else if (sellectedTopping === "chicken") {
      price = 9.50;
    } else {
      price = 10.00;
    }
  }
}


// User Interface Logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var selectedSize = $("#size").attr('selected',true).val();
    var sellectedTopping = $("input:radio[name=topping]:checked").val();

    $("#size").val("");
    $("input:radio[name=topping]:checked").val("");

    var newPizza = new Pizza(selectedSize, sellectedTopping);


  });
});
