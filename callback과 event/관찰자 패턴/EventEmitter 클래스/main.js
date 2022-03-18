import { EventEmitter } from "events";
/*
EventEmitter 클래스를 사용해 특정 유형의 이벤트가 발생되면 호출되는 하나 이상의 함수를 리스너로 등록가능
*/
const emitter = new EventEmitter(); //eventemitter에 대한 참조
/*
필수 메서드
on(event, listener) : 주어진 이벤트 유형에 대해 새로운 리스너를 등록
once(event, listener) : 첫 이벤트가 전달된후 제거되는 새로운 리스너 등록(일회용)
emit(event, [arg1], [...]) : 새 이벤트를 생성하고 리스너에 전달할 추가적인 인자 제공
remove(event, listener) : 지정된 이벤트 유형에 대한 리스너 제거

1. 메서드들은 체이닝을 가능하게 하기 위해 EventEmitter 인스턴스를 반환
2. listener 함수는 시그니처 함수를 가지고 있기 때문에 이벤트가 발생된 순간에 전달된 인수들을 쉽게 받을 수 있음
3. 첫 인자가 error일 필요 없고, emit이 호출되면 어떤 값이든 전달 가능
*/
