import user from "./module/getDatas.js";

import createTbody from "./module/createTbody.js";

import handleSearch from "./module/searchItems.js";

const base = await user();

createTbody(base);
handleSearch(base)

