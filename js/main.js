const pizzasPrice = new Map()

pizzasPrice.set("Margarita",101).set("Four Cheeses",129).set("Bayrnian",149)
.set("Margarita 2",120).set("B&Q",399).set("Verona",140);

let firstName, lastName, price, quantity, pizzaName;

document.getElementById('main-form').addEventListener("submit", function(e){
  e.preventDefault()
  firstName = this.firstName.value;
  lastName = this.lastName.value;
  quantity = this.quantity.value;
  pizzaName = this.pizzaName.value;
  price = pizzasPrice.get(pizzaName);
  document.getElementById("firstName").innerHTML += " " + firstName;
  document.getElementById("lastName").innerHTML += " " + lastName;
  document.getElementById("selectedPizza").innerHTML += " " + pizzaName;
  document.getElementById("price").innerHTML += " " + price * quantity + "UAH";
  document.getElementById("pizzaCount").innerHTML += " " + quantity
  document.getElementById("bg").style.visibility = "visible";
});
