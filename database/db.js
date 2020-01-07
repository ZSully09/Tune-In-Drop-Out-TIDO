//user
//add
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

// get user by client_id
const getUserById = function(client_id, db) {
  return db.query(
    `
  SELECT * FROM users WHERE client_id=$1`,
    [`${id}`]
  );
};

//songs
//

const getTrackItemById = function(track_id, db) {
  return db.query(
    `
    SELECT * FROM songs
    JOIN books
    ON items.id = item_id
    WHERE item_id = $1;
    `,
    [`${item_id}`]
  );
};
