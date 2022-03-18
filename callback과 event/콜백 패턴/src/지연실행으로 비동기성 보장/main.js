/*
process.nestTick()을 이용해 동기 콜백을 지연(deferred execution) 실행한다.
대기 중인 I/O 이벤트 대기열의 앞으로 밀어 넣고 즉시 반환한다. 그러면 진행중인 작업이
제어를 이벤트 루프로 넘기는 즉시 콜백이 실행된다.
*/
import { readFile } from "fs";

const cache = new Map();

function consistentReadAsync(filename, callback) {
  if (cache.has(filename)) {
    process.nextTick(() => callback(cache.get(filename)));
  } else {
    readFile(filename, "utf-8", (err, data) => {
      cache.set(filename, data);
      callback(data);
    });
  }
}
