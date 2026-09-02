let users=[
  {name:"Rahul",isActive:true},
  {name:"Priya",isActive:false}
];

let activeUsers=users.filter(
  (value)=>{
   if (value.isActive===true)
    return value;
  }
);
console.log(activeUsers);