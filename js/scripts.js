// Business Logic
function Pizza(size, topping) {
  this.size = size,
  this.toppings = topping
}

Pizza.prototype.getPrice = function() {
  var price = 0;
  if (this.size === "Small") {
    if (this.toppings.length <= 2) {
      price = 5.00;
    } else if (this.toppings.length ===3) {
      price = 6.50;
    }
    else {
      price = 8.17;
    }
  }
  else if (this.size === "Medium") {
    if (this.toppings.length <= 2) {
      price = 6.00;
    } else if (this.toppings.length ===3) {
      price = 7.19;
    } else  {
      price = 9.17;
    }
  }
  else if (this.size === "Large") {
    if (this.toppings.length <= 2) {
      price = 7.12;
    } else if (this.toppings.length ===3) {
      price = 8.00;
    } else {
      price = 10.39;
    }
  }
  return price;
}

// User Interface Logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var selectedSize = $("#size").attr('selected',true).val();

    var toppingList = [];
    $("input:checkbox[name=topping]:checked").each(function(){
       var selectedToppings = $(this).val();
       toppingList.push(selectedToppings);
     });

    $("#size").val("");

    var newPizza = new Pizza(selectedSize, toppingList);
    var toppingString = toppingList.toString();

    $("#show-price").show();
    $(".size").html(selectedSize);
    $(".toppings").html(toppingString);

    var price = newPizza.getPrice();
    $("#output").html("Your total price is: $" + price);
  });
});
