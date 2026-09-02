let products=[
  {name:"Laptop",inStock:true},
  {name:"Mouse",inStock:false}
];

let inStockProduct=products.filter(
  (value)=>{
   if (value.inStock===true)
    return value;
  }
);
console.log(inStockProduct);