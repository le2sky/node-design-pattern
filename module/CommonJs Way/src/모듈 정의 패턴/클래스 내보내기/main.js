const Logger = require("./logger");
const dbLogger = new Logger("DB");

dbLogger.info("information");

const accessLogger = new Logger("ACCESS");
accessLogger.verbose("verbose message");
