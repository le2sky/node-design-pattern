import { EventEmitter } from "events";
import { readFile, readFileSync } from "fs";
/*
이벤트 또한 콜백과 마찬가지로 동기적 또는 비동기적으로 발생될 수 있다.
중요한것은 동기와 비동기를 혼합해 동일한 유형의 이벤트를 발생시키면 안된다.

이벤트가 비동기적으로 발생할 때 현재의 스택이 이벤트 루프에 넘어갈 대까지는 이벤트 발생을
만들어내는 작업 이후에도 새로운 리스너를 등록할 수 있다.
그 이유는 이벤트가 이벤트 루프의 다음 사이클이 될 떄까지 실행되지 않는 것이 보장되기 떄문이다.
=> 콜 스택이 비어야 이벤트 루프가 돌기 때문에, 보장 받을 수 있음

*/
/*
    NodeJs 세계에서 EventEmitter 자체로 사용되는 것은 드물다. 대신 다른 클래스 확장이 일반적이다.
*/

class FindRegex extends EventEmitter {
  constructor(regex) {
    super();
    this.regex = regex;
    this.files = [];
  }

  addFile(file) {
    this.files.push(file);
    return this;
  }

  find() {
    //동기적으로 이벤트를 발생시키면 이벤트를 손실 시킬 수 있다.
    for (const file of this.files) {
      let content;
      try {
        content = readFileSync(file, "utf8");
      } catch (err) {
        this.emit("error", err);
      }
      this.emit("fileread", file);
      const match = content.match(this.regex);
      if (match) {
        match.forEach((elem) => this.emit("found", file, elem));
      }
    }
  }
}

const findRegexInstance = new FindRegex(/hello \w+/);
findRegexInstance
  .addFile("fileA.txt")
  .addFile("fileB.json")
  .find()
  .on(
    //아래 리스너들은 절대 호출안됨
    "found",
    (file, match) => console.log(`Matched "${match}" in file ${file}`)
  )
  .on("error", (err) => console.err(`Error emitted ${err.message}`))
  .on("fileread", (file) => console.log(`${file} was read`));
