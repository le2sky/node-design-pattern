import { count, increment } from "./counter.js";
import alertCount from "./b.js";
console.log(count);
increment();
console.log(count);

alertCount();

count++; // TypeError: Assignment to constant variable!
