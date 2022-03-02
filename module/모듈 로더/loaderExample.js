const dependency = require("./anotherModule");

function log() {
  console.log(`${dependency.username}`);
}
//module.exports와 exports의 차이점 폴더 참고
module.exports.run = () => {
  log();
};
