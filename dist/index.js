'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./vorarbeiterreact.cjs.min.js");
} else {
  module.exports = require("./vorarbeiterreact.cjs.js");
}
