function additionAsync(a, b, callback) {
  setTimeout(() => callback(a + b), 100);
}

console.log("before");
additionAsync(1, 2, (result) => console.log(`Result: ${result}`));
console.log("after");

/*
주의: 연속 전달 방식과 비 연속 전달 방식은 문법적인 차이가 없다. 따라서 콜백의 목적은 api 문서에 분명하게 명시된다.
*/

//비 연속 전달 콜백(Non-CPS) 예시
const result = [1, 5, 7].map((element) => element + 1);
console.log(result);
