let email=["rahul@gmail.com","priya@yahoo.com","aman.@gmail.com"];
let gmail=email.filter(
  (value)=>{
    if(value.includes("@gmail.com")===true)
      return value;
  }
);

console.log(gmail);