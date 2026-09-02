let product=["laptop","mobile","headphones"];
let newProduct=product.map(
  (value)=>{
    return value.toUpperCase();
  }
);

console.log(newProduct);