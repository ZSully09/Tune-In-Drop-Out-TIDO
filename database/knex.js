var environment = process.env.NODE_ENV || "development";
var config = require("../express-back-end/knexfile")[environment];

module.exports = require("knex")(config);
