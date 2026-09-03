let cartitems=[
  {name:"Mouse", price:500, quantity:2},
{name:"Keyboard", price:1000, quantity:1},
];

let finalcarttotal=cartitems.reduce(
(accumulator,currentvalue)=>{
  accumulator+=currentvalue.price*currentvalue.quantity;
  return accumulator;
},0);
console.log(finalcarttotal);