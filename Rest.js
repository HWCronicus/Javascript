function greaterThan(paramOne, paramTwo) {
  if (paramTwo > paramOne) {
    return true;
  } else {
    return false;
  }
}

function getLength(strInput) {
  return strInput.length;
}

var myFavRestaurant = {
  name: "Cron's Bistro",
  cuisineType: "Bar Food",
  rating: 4.2,
  hasTakeout: true,
};

var restaurants = [
  myFavRestaurant,
  {
    name: "Cron's Bistro number 2",
    cuisineType: "Fast Food",
    rating: 3.5,
    hasTakeout: true,
  },
  {
    name: "Cron's Bistro XL",
    cuisineType: "Fine Dinning",
    rating: 5,
    hasTakeout: false,
  },
];

function loopThroughRestaurants(topRestaurants) {
  for (i = 0; i < topRestaurants.length; i++) {
    if (topRestaurants[i].rating > 3) {
      console.log(topRestaurants[i].name);
    }
  }
}
