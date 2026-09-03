let tech = ["HTML", "CSS", "JavaScript"];
let frontech = tech.reduce(
  (accumulator, currentvalue) => {
    if (accumulator === "") {
      accumulator += currentvalue;
      return accumulator;
    }

    else {
      accumulator += ", " + currentvalue;
      return accumulator;
    }

  }, "");
console.log(`"${frontech}"`);