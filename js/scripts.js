// Business Logic

function Cart() {
  this.pizzas = [],
    this.currentId = 0
}

Cart.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

Cart.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Cart.prototype.findPizza = function(id) {
  for (i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i].id == id) {
      return this.pizzas[i];
    }
  }
  return false;
}

Cart.prototype.deletePizza = function(id) {
  for (i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i].id == id) {
      this.pizzas.splice(i, 1);
      return true;
    }
  }
  return false;
}

Cart.prototype.getTotalPrice = function() {
  var total = 0;
  for (i = 0; i < this.pizzas.length; i++) {
    total += this.pizzas[i].getPrice();
  }

  return total;
}

function Pizza(size, topping) {
  this.id = -1, // unassigned
    this.size = size,
    this.toppings = topping
}

Pizza.prototype.getPrice = function() {
  var price = 0;
  if (this.size === "Small") {
    if (this.toppings.length <= 3) {
      price = 5.00;
    } else if (this.toppings.length === 4) {
      price = 6.50;
    } else {
      price = 8.17;
    }
  } else if (this.size === "Medium") {
    if (this.toppings.length <= 3) {
      price = 6.00;
    } else if (this.toppings.length === 4) {
      price = 7.19;
    } else {
      price = 9.17;
    }
  } else if (this.size === "Large") {
    if (this.toppings.length <= 3) {
      price = 7.12;
    } else if (this.toppings.length === 4) {
      price = 8.00;
    } else {
      price = 10.39;
    }
  }
  return price;
}

Pizza.prototype.showPizzaDetails = function() {
  var details = "<h3> Pizza Details </h3>"
  details += "<p>" + this.size + " size pizza with toppings " + this.toppings + "</p>";
  details += "<p> Price of the pizza is " + this.getPrice() + " dollars.</p>";

  return details;
}

// User Interface Logic
var shoppingCart = new Cart();

function displayShoppingCart(shoppingCartToDisplay) {
  var pizzaList = $("ul#pizzas");
  var htmlForPizzaInfo = "";
  shoppingCartToDisplay.pizzas.forEach(function(pizza) {
    htmlForPizzaInfo += "<li id=" + pizza.id + "> Pizza number: " + pizza.id + "</li>";
  });
  pizzaList.html(htmlForPizzaInfo);

  var totalPrice = $("#total-price");
  totalPrice.html("Total price of your order is " + shoppingCartToDisplay.getTotalPrice());
};

function showPizza(pizzaId) {
  var pizza = shoppingCart.findPizza(pizzaId);
  $("#pizza-details").html(pizza.showPizzaDetails());
  $("#pizza-details").show();
  var buttons = $("#delete-button");
  buttons.empty();
  buttons.append("<button class='deleteButton btn btn-info' id=" + pizza.id + ">Delete</button>");
  $("#delete-button").show();
  var buttons = $("#orderButton");
  buttons.empty();
  buttons.append("<button class='orderButton btn btn-info'" + ">Order now</button>");
  $("#orderButton").show()
}

function attachPizzaListener() {
  $("ul#pizzas").on("click", "li", function() {
    showPizza(this.id);
  });

  $("#delete-button").on("click", ".deleteButton", function() {
    shoppingCart.deletePizza(this.id);
    $("#pizza-details").hide();
    $("#delete-button").hide();
    displayShoppingCart(shoppingCart);
  });
  $("#orderButton").on("click", ".orderButton", function() {
    alert("Your order will be ready in 5 min.");
  });
}

$(document).ready(function() {
  attachPizzaListener();
  $("#pizza-details").hide();
  $("#delete-button").hide();
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var selectedSize = $("#size").attr('selected', true).val();
    var toppingList = [];
    $("input:checkbox[name=topping]:checked").each(function() {
      var selectedTopping = $(this).val();
      toppingList.push(selectedTopping);
    });

    var newPizza = new Pizza(selectedSize, toppingList);
    shoppingCart.addPizza(newPizza);
    displayShoppingCart(shoppingCart);

    var price = newPizza.getPrice();
  });
});