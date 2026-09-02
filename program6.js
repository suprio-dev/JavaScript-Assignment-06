let product=[
  {name:"Laptop",price:"50000"},
  {name:"Mouse",price:"500"}
];

let productInfo=product.map(
  (value)=>{
    let newObj={...value};
    newObj.inStock=true;
    return newObj;
  }
);


console.log(productInfo);