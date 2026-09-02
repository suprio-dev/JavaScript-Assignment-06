let prices=[100,200,300];
let finalProces=prices.map(
  (value)=>{
    return value+value*0.1;
  }
);
console.log("Original:",prices);
console.log("New:",finalProces);