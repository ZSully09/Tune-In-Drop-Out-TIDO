DROP TABLE IF EXISTS party
CASCADE;

CREATE TABLE party
(
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL,
  genre varchar(255) NOT NULL,
  duration_time timestamp,
  bpm_minimum integer,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);