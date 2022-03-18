import { readFile } from "fs";

const cache = new Map();

/*
파일이 처음 읽혀지고 캐싱될 때까지는 비동기적으로 동작한다.
하지만 캐시에 이미 있는 파일에 대한 요청은 동기적으로 동작하여
즉각적으로 콜백을 호출해서 위험하다.

즉, 캐싱의 유무에 따라서 동기, 비동기가 갈린다. 정확성과 효율성 면에서
전체 어플리케이션의 흐름에 많은 영향을 끼칠 수 있다.
*/

function inconsistentRead(filename, cb) {
  if (cache.has(filename)) {
    // 동기적으로 호출
    cb(cache.get(filename));
  } else {
    // 비동기 함수 readfile
    readFile(filename, "utf-8", (err, data) => {
      cache.set(filename, data);
      cb(data);
    });
  }
}
