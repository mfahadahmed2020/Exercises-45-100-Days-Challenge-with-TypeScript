let blockLet;
let blockConst: string;

{
  blockLet = "visible inside the block";
  blockConst = "also only inside the block";
  console.log(blockLet); // Works fine here
  console.log(blockConst); // Also works fine here
}

try {
  console.log(blockLet); // This will fail
} catch (error) {
  console.log("blockLet is not accessible outside the block.");
}

try {
  console.log(blockConst); // This will also fail
} catch (error) {
  console.log("blockConst is not accessible outside the block.");
}