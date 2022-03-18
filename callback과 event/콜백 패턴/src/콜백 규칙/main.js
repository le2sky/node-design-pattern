/*
Nodejs CPS API 규칙
*/

import { readFile } from "fs";
import { parse } from "path";
//1. 콜백은 마지막
readFile("", "", callback);

//2. 오류는 맨 처음
readFile("foo.txt", "utf-8", (err, data) => {
  if (err) {
    handleError(err);
  } else {
    processData(data);
  }
});

//3. 오류 전파
function readJSON(filename, callback) {
  readFile(filename, "utf-8", (err, data) => {
    let parsed;
    if (err) {
      //error를 전파하고 현재의 함수에서 빠져나온다.
      return callback(err);
    }
    try {
      //파일 내용 파싱
      parsed = JSON.parse(data);
    } catch (error) {
      //파싱 에러 캐치
      return callback(err);
    }
    //에러 없음 => 데이터 전파
    callback(null, parsed);
  });
}
