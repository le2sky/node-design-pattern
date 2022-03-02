// 이해 예시 : 모듈로더/loader.js의 사용예시를 보고 모듈을 내보낼 때, module.exports와 exports의 차이점을 이해하기
let module = {
  exports: {},
};
function a(module, exports) {
  module.exports = () => {
    console.log("hi");
  };
  exports = () => {};
}
a(module, module.exports);

/*
exports 변수의 재할당은 module.exports의 내용을 변경하지 않습니다. a함수의 exports 매개변수는
module.exports를 참조하고 있는 상황에서 exports = () => {}는 modue.exports 참조에서 새로 만든 함수를 참조하게
하기때문에 module.exports의 값을 바꾸지 않지만, module.exports 에 할당을 하면 module(찐 module의 주소)의 exports의 참조하는
값을 재할당하기 때문에 변경됩니다.
*/
