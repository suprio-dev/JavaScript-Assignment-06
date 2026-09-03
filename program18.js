let objects=[
  {amount:500},
  {amount:1000},
  {amount:750}
];

let amount=objects.reduce(
  (accumulator,currentvalue)=>{
    accumulator+=currentvalue.amount;
    return accumulator;
  },0);

  console.log(amount);