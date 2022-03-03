//module.exports 변수 전체를 함수로 재할당
//모듈에 대한 정확한 진입점을 제공히는 단일 기능을 제공하여 이해와 사용을 단순화 한다.
module.exports = (message) => {
  console.log(`info : ${message}`);
};

module.exports.verbose = (message) => {
  console.log(`verbose : ${message}`);
};
