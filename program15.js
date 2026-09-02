let prices=[500,1200,300];
let totalPrice=prices.reduce(
  (accumulator,currentvalue)=>{
return accumulator+=currentvalue;
  },0);

  console.log(totalPrice);