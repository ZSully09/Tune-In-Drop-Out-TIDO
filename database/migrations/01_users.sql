-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS users
CASCADE;



CREATE TABLE users
(
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  spotify_client_id varchar(255)
);
