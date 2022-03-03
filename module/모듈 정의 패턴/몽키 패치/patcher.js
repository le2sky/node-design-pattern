//모듈이 전역 범위의 다른 모듈이나 객체를 수정할 수 있다. 이것을 Monkey patching이라고 하며, 일반적으로 런타임 시에 기존 객체를 수정하거나 동작을 변경하는
//임시 수정 적용 관행을 그렇게 말한다. 테스트를 위한 상황이나, 실전에서도 사용된다.

require("./logger").customMessage = function () {
  console.log("This is a new functionality");
};
