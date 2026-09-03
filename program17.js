let item=[
{name:"Laptop",quantity:1},
{name:"Mouse",quantity:2}
];

let totalItems=item.reduce(
  (accumulator,currentvalue)=>{
    accumulator+=currentvalue.quantity;
    return accumulator;
  },0);
  console.log(totalItems);