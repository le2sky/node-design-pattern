import { readFile } from "fs";

function readJSONThrows(filename, callback) {
  readFile(filename, "utf-8", (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, JSON.parse(data));
  });
}

readJSONThrows("invalid_json.json", (err) => console.error(err));

//대응
process.on("uncaughtException", (err) => {
  console.error(
    `this will catch at last the JSON parsing exception: ${err.message}`
  );
  process.exit(1);
});

/*
캐치되지 않은 예외가  발생한 경우, 특히 운영환경에서는 어플리케이션을 실행상태에 두지 않는 것이 권장
선택적으로 필요한 작업의 정리 후에 프로세스는 즉시 종료되어야 하며, 프로세스 과리자가 어플리케이션을 재시작
해야한다. fail-fast 접근법이라 하며 nodejs에서 권장되는 사항이다.
*/
