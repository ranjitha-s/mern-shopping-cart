if (process.env.NODE_ENv === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
