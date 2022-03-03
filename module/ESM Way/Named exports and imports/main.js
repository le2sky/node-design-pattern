//logger 모듈에서 exports 된 개채들을 loggerModule이란 네임스페이스로 접근 가능
import * as loggerModule from "./logger.js";
import { log, Logger } from "./logger.js";
import { LEVELS as levels } from "./logger.js";

const LEVELS = 2;
console.log(loggerModule);
log("information");

const logger = new Logger("DEFAULT");
logger.log("information log");
