function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

var myPizza = {
  name: "Deluxe",
  crust: "Pan",
  serves: 4,
  toppings: ["Onions", "Green Peppers", "Mushrooms", "Sausage", "Pepperoni"],
};

var pizzas = [
  myPizza,
  {
    name: "BBQ Chicken",
    crust: "Hand Tosses",
    serves: 4,
    toppings: ["BBQ Chicken", "Onions", "Chedder Cheese"],
  },
  {
    name: "Meat Lovers",
    crust: "Stuffed",
    serves: 4,
    toppings: ["Pepperoni", "Sausage", "Ham", "Bacon", "Beef"],
  },
];

function loopThrough(pizzaPies) {
  for (i = 0; i < pizzaPies.length; i++) {
    if (pizzaPies[i].crust === "thin crust") {
      console.log(pizzaPies[i].name);
    }
  }
}
