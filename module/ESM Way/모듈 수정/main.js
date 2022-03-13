import fs from "fs";
import * as test from "fs";

console.log(fs.constructor.prototype);

import { mockEnable, mockDisable } from "./mock-read-file.js";

mockEnable(Buffer.from("hello world"));

fs.readFile("fake-path", (err, data) => {
  if (err) {
    console.err(err);
    process.exit(1);
  }
  console.log(data.toString());
});

mockDisable();
