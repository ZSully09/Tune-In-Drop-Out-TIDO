exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "Chris Drysdale",
          email: "chris.drysdale12@gmail.com",
          password: "chrise_d"
        },
        {
          id: 2,
          name: "Nick Hoszko",
          email: "nhoszko@gmail.com",
          password: "douche"
        },
        {
          id: 3,
          name: "Zach Sullivan",
          email: "test@test.com",
          password: "password"
        }
      ]);
    });
};

// INSERT INTO users
//   (name, email, password)
// VALUES
//   ('Chris Drysdale', 'chris.drysdale12@gmail.com', 'chrise_d'),
//   ('Nick Hoszko', 'nhoszko@gmail.com', 'douche'),
//   ('Zach Sullivan', 'test@test.com', 'password')
