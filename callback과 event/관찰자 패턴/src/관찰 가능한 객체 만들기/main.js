/*
    NodeJs 세계에서 EventEmitter 자체로 사용되는 것은 드물다. 대신 다른 클래스 확장이 일반적이다.
*/
import { EventEmitter } from "events";
import { readFile } from "fs";

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
    for (const file of this.files) {
      readFile(file, "utf-8", (err, content) => {
        if (err) {
          return this.emit("error", err);
        }
        this.emit("fileread", file);

        const match = content.match(this.regex);
        if (match) {
          match.forEach((elem) => this.emit("found", file, elem));
        }
      });
    }
    return this;
  }
}

const findRegexInstance = new FindRegex(/hello \w+/);
findRegexInstance
  .addFile("fileA.txt")
  .addFile("fileB.json")
  .find()
  .on("found", (file, match) =>
    console.log(`Matched "${match}" in file ${file}`)
  )
  .on("error", (err) => console.err(`Error emitted ${err.message}`))
  .on("fileread", (file) => console.log(`${file} was read`));
