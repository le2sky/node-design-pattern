import * as aModule from "./a.js";
export let loaded = false;
export const a = aModule;

console.log(a);
/* a는 아직 평가 이전임을 기억 모듈 적재 과정(파싱-인스턴스화-평가)
[Module: null prototype] {
  b: <uninitialized>,
  loaded: <uninitialized>
}
*/
loaded = true;
