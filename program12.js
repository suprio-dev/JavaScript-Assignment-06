let product=[
  {name:"Mouse",price:500},
  {name:"Keyboard",price:1500}
];

let newProduct=product.filter(
  (value)=>{
    if(value.price>1000)
      return value;
  }
);

console.log(newProduct);