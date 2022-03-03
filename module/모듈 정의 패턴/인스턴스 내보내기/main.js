const logger = require("./logger");
logger.log("information");

//이 기법은 신중히 사용해야함 => 모듈 제작자가 클래스를 private로 유지하고 싶어서 인스턴스를 내보낸 상황에
//아래처럼 contructor에 접근해 새로운 인스턴스를 만들 수 있음

const newLogger = new logger.constructor("CUSTOM");
newLogger.log("information");
