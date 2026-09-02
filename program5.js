let user=[
  {name: "Rahul",role:"student"},
  {name: "Priya",role:"student"}
];

let userDetails=user.map(
  (value)=>{
   let newObj={...value};
   newObj.role="developer";
return newObj;
  }
);

console.log(userDetails);