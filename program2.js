let prices=[100,250,500];
let productPrices=prices.map(
  (value)=>{
    return "₹"+value
  }
);

console.log(productPrices);