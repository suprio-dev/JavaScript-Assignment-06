let user=[
  {name: "Rahul",email:"rahul@example.com"},
  {name: "Priya",email:"priya@example.com"}
];

let username=user.map(
  (value)=>{
    return value.name;
  }
);

console.log(username);