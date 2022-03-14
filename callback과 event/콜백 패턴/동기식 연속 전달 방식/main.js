//직접 스타일(direct style)
function add(a, b) {
  return a + b;
}

//연속 전달 방식(continuation-passing style)
function addCps(a, b, callback) {
  callback(a, b);
}

console.log("before");
addCps(1, 2, (result) => console.log(`Result: ${result}`));
console.log("after");
