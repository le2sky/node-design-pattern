/*
Zalgo의 사례를 동기 API를 이용해서 해결
*/

import { readFileSync } from "fs";

const cache = new Map();

function consistentReadSync(filename) {
  if (cache.has(filename)) {
    return cache.get(filename);
  } else {
    const data = readFileSync(filename, "utf-8");
    cache.set(filename, data);
    return data;
  }
}
