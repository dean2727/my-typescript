import products from './products';

let productName: string = products[0].name;

// using filter() to get products with productName (first item in the list)
const product = products.filter((pr) => {
  if (pr.name != productName) {
    return false;
  }
  return pr;
})[0];

//console.log(product);

// if product is preordered, notify the customer that we'll send them a message when their product ships
if (product.preOrder === 'true') {
  console.log('We will notify you when %s is being shipped!', product.name);
}

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "404 Bob St., Dallas, Texas, 76244";

// free shipping for order over $25
if (Number(product.price) >= 25) {
  shipping = 0;
  console.log("Free shipping!");
}
else {
  shipping = 5;
}

// if customer is from NY, they must pay extra tax of 0.1. elsewhere, it is 0.05
if (shippingAddress.match('New York')) {
  taxPercent = .1;
}
else {
  taxPercent = .05;
}

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

// create receipt that shows address, price, tax, shipping cost, and total cost
console.log("~~~~~~Item receipt~~~~~~");
console.log("Name: %s", product.name);
console.log("Shipping address: %s", shippingAddress);
console.log("Price: %s", product.price);
console.log("Total tax to be collected: %s", taxTotal);
console.log("Shipping: %s", shipping);
console.log("Total: %s", total);