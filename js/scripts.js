// Business Logic
function Pizza(size, topping) {
  this.size = size,
  this.toppings = topping
}

Pizza.prototype.getPrice = function() {
  var price = 0;
  if (this.size === "Small") {
    if (this.toppings === "cheese" || this.toppings === "veggie") {
      price = 6.39;
    } else if (this.toppings === "chicken") {
      price = 7.50;
    } else {
      price = 8.17;
    }
  }
  else if (this.size === "Medium") {
    if (this.toppings === "cheese" || this.toppings === "veggie") {
      price = 7.39;
    } else if (this.toppings === "chicken") {
      price = 8.50;
    } else {
      price = 9.00;
    }
  }
  else if (this.size === "Large") {
    if (this.toppings === "cheese" || this.toppings === "veggie") {
      price = 8.39;
    }  else if (this.toppings === "chicken") {
      price = 9.50;
    }  else {
      price = 10.68;
    }
  }
  return price;
}

// User Interface Logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var selectedSize = $("#size").attr('selected',true).val();
    var selectedTopping = $("input:radio[name=topping]:checked").val();

    $("#size").val("");
    $("input:radio[name=topping]:checked").val("");

    var newPizza = new Pizza(selectedSize, selectedTopping);

    $("#show-price").show();
    $(".size").html(selectedSize);
    $(".topping").html(selectedTopping);

    var price = newPizza.getPrice();
    $("#output").html("Your total price is: $" + price);
  });
});
