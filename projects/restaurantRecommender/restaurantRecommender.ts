import { orders, Order, PriceBracket } from "./orders";
import { restaurants, Restaurant } from "./restaurants";

// project code from types lesson
let hour: number = new Date().getHours();
const dollarSigns = '$$';
const deliveryTimeMax = 90;
const maxDistance = 10;
let result: string;

const priceBracket: number = dollarSigns.length;

const filteredRestaurants = restaurants.filter((restaurant) => {
  if (Number(restaurant.priceBracket) > priceBracket) {
    return false;
  }

  if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
    return false;
  }

  if (Number(restaurant.distance) > maxDistance) {
    return false;
  }

  if (hour < Number(restaurant.openHour) || hour > Number(restaurant.closeHour)) {
    return false;
  }

  return restaurant;
});

if (filteredRestaurants.length === 0) {
  result = 'There are no restaurants available right now.';
} else {
  result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);


// project code from complex types lesson, introduces new concepts like enums
function getMaxPrice(pb: PriceBracket): number {
  switch (pb) {
    case PriceBracket.Low:
      return 10.0;
      break;
    case PriceBracket.Medium:
      return 20.0;
      break;
    case PriceBracket.High:
      return 30.0;
      break;
    default:
      return -1;
  }
}

function getOrders(price: PriceBracket, orders: Order[][]): Order[][] {
  let filteredOrders: Order[][] = [];
  let maxPrice = getMaxPrice(price);

  // get all orders that are less than the max price
  orders.forEach((order) => {
    filteredOrders.push(order.filter(o => o.price < maxPrice));
  });
  return filteredOrders;
}

function printOrders(restaurants: Restaurant[], orders: Order[][]): void {
  let currentRestaurant: number = 1;
  restaurants.forEach((res, i) => {
    // dont print if restaurant has no eligible orders
    if (!(orders[i].length === 0)) {
      console.log(`Restaurant Name #${currentRestaurant}`);
      currentRestaurant++;
      orders[i].forEach((ord, j) => {
        console.log(`- Order ${j+1}: \$${orders[i][j].price}`);
      });
    }
  });
}


const elligibleOrders = getOrders(PriceBracket.Low, orders);
console.log(elligibleOrders);
printOrders(restaurants,elligibleOrders);
