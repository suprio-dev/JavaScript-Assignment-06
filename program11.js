let user=[
  {name: "Rahul",role:"developer"},
  {name: "Priya",role:"student"}
];

let devUser=user.filter(
 (value)=>{
  if(value.role==="developer")
    return value;
 }
);

console.log(devUser);