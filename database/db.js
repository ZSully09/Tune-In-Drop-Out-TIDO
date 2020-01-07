//add new user to db
const bcrypt = require("bcrypt");

const addUser = function(user, db) {
  return db
    .query(
      `
  INSERT INTO users(email,password) VALUES($1,$2) RETURNING *;
`,
      [`${user.email}`, `${bcrypt.hashSync(user.password, 10)}`]
    )
    .then(data => {
      if (data.rows.length) {
        return data.rows[0];
      }
    });
};

// search for user by email
const getUserByEmail = function(email, db) {
  return db.query(
    `
  SELECT * FROM users WHERE email=$1`,
    [`${email}`]
  );
};

// Get user by client_id used to show a users email in the header.
const getUserById = function(client_id, db) {
  return db.query(
    `
  SELECT * FROM users WHERE client_id=$1`,
    [`${id}`]
  );
};
