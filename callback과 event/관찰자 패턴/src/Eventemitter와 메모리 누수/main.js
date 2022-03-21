import { EventEmitter } from "events";

const emitter = new EventEmitter();
const thisTakesMemory = "big string..";
const listener = () => {
  console.log(thisTakesMemory);
};

emitter.on("an_event", listener);
emitter.removeListener("an_event", listener);

/*

thisTakesMemory에 대한 참조가 리스너와 emitter에 의해 가비지 컬렉션 대상이 되지않는다. (도달 가능 객체)
예로 매 연결 마다 이것에 대한 참조나 객체가 생성돼 메모리 누수가 발생할 수 있다.

 EventEmitte 는 개발자에게 메모리 누수에 대한 가능성을 경고하기 위해 매우 간단한
 내장 메커니즘이 존재한다.
 리스너의 수가 특정 개수(기본 10개)를 초과할 때 경고를 발생시킨다.
 
 setMaxListeners() 메서드로 설정 가능함
*/
