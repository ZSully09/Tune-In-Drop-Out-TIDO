const Express = require("express");
// const App = Express();
const BodyParser = require("body-parser");
const App = require("../express-back-end/auth-server/authorization_code/app");
const PORT = 8888;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static("public"));

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("../database/db");
const db = new Pool(dbParams);
db.connect();

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// // Sample GET route
// App.get("/api/data", (req, res) =>
//   res.json({
//     message: "Seems to work!"
//   })
// );

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
