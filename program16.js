let product=["Laptop","Mouse","Keyboard"];

let countProduct=product.reduce(
  (accumulator,currentValue)=>{
if(currentValue!="")
  accumulator++;
return accumulator;
  },0);

  console.log(countProduct);



