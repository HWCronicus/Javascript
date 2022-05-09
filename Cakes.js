var bakery = {
  items: {
    item: [
      {
        id: "0001",
        type: "donut",
        name: "Cake",
        ppu: 0.55,
        batters: {
          batter: [
            { id: "1001", type: "Regular" },
            { id: "1002", type: "Chocolate" },
            { id: "1003", type: "Blueberry" },
            { id: "1004", type: "Devil's Food" },
          ],
        },
        topping: [
          { id: "5001", type: "None" },
          { id: "5002", type: "Glazed" },
          { id: "5005", type: "Sugar" },
          { id: "5007", type: "Powdered Sugar" },
          { id: "5006", type: "Chocolate with Sprinkles" },
          { id: "5003", type: "Chocolate" },
          { id: "5004", type: "Maple" },
        ],
      },
      {
        id: "0002",
        type: "donut",
        name: "Raised",
        ppu: 0.55,
        batters: {
          batter: [{ id: "1001", type: "Regular" }],
        },
        topping: [
          { id: "5001", type: "None" },
          { id: "5002", type: "Glazed" },
          { id: "5005", type: "Sugar" },
          { id: "5003", type: "Chocolate" },
          { id: "5004", type: "Maple" },
        ],
      },

      {
        id: "0003",
        type: "donut",
        name: "Old Fashioned",
        ppu: 0.55,
        batters: {
          batter: [
            { id: "1001", type: "Regular" },
            { id: "1002", type: "Chocolate" },
          ],
        },
        topping: [
          { id: "5001", type: "None" },
          { id: "5002", type: "Glazed" },
          { id: "5003", type: "Chocolate" },
          { id: "5004", type: "Maple" },
        ],
      },
      {
        id: "0004",
        type: "bar",
        name: "Bar",
        ppu: 0.75,
        batters: {
          batter: [{ id: "1001", type: "Regular" }],
        },
        topping: [
          { id: "5003", type: "Chocolate" },
          { id: "5004", type: "Maple" },
        ],
        fillings: {
          filling: [
            { id: "7001", name: "None", addcost: 0 },
            { id: "7002", name: "Custard", addcost: 0.25 },
            { id: "7003", name: "Whipped Cream", addcost: 0.25 },
          ],
        },
      },

      {
        id: "0005",
        type: "twist",
        name: "Twist",
        ppu: 0.65,
        batters: {
          batter: [{ id: "1001", type: "Regular" }],
        },
        topping: [
          { id: "5002", type: "Glazed" },
          { id: "5005", type: "Sugar" },
        ],
      },

      {
        id: "0006",
        type: "filled",
        name: "Filled",
        ppu: 0.75,
        batters: {
          batter: [{ id: "1001", type: "Regular" }],
        },
        topping: [
          { id: "5002", type: "Glazed" },
          { id: "5007", type: "Powdered Sugar" },
          { id: "5003", type: "Chocolate" },
          { id: "5004", type: "Maple" },
        ],
        fillings: {
          filling: [
            { id: "7002", name: "Custard", addcost: 0 },
            { id: "7003", name: "Whipped Cream", addcost: 0 },
            { id: "7004", name: "Strawberry Jelly", addcost: 0 },
            { id: "7005", name: "Rasberry Jelly", addcost: 0 },
          ],
        },
      },
    ],
  },
};

const items = bakery.items.item;

// const filledItems = items.filter(function (obj){
//     if(obj.hasOwnProperty("fillings")){
//         return true;
//     }
// });

// mapItems = (items) =>{
//     var output = items.map(function(obj){
// 		let countFillings = obj.fillings.filling.length;
// 		let batterString = obj.batters.batter.map(function(bat){
// 			// console.log(top.type);
// 			return bat.type;
// 		 });
// 		 let toppingArray = obj.topping.map(function(top){
// 			 return top.type;
// 		 })

//         var template = {
//                         "id": parseInt(obj.id), //as an int
//                         "type": obj.type,
//                         "name": obj.name,
//                         "ppu": obj.ppu,
//                         "batters": `${batterString}`,
//                         // "ingredients": obj.topping,
// 						"ingredients": [toppingArray],
//                         "countOfFillings": countFillings
//                         };
// 		// console.log(template);
// 		return template;
//     })
// 	return output;
// };

const mapItems = items.map((obj) => {
  let batterString = obj.batters.batter.map((bat) => bat.type);
  let toppingArray = obj.topping.map((top) => top.type);
  let fillingCount = 0;
  if (obj.fillings !== undefined) {
    fillingCount = obj.fillings.filling.length;
  }
  let template = {
    id: parseInt(obj.id), //as an int
    type: obj.type,
    name: obj.name,
    ppu: obj.ppu,
    batters: `${batterString} `,
    ingredients: toppingArray,
    countOfFillings: fillingCount,
  };
  return template;
});

const filterFilled = mapItems.filter((obj) => obj.countOfFillings > 0);
