let tech=["HTML","CSS","JavaScript"];
let frontech=tech.reduce(
  (accumulator,currentvalue)=>{
    accumulator+=currentvalue+" , ";
    return accumulator;
  },"");
  console.log(frontech);