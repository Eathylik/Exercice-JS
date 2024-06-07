import user from "./module/getDatas.js";

import createTbody from "./module/createTbody.js";

const base = await user();

createTbody(base);


