-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS users
CASCADE;
DROP TABLE IF EXISTS party
CASCADE;
DROP TABLE IF EXISTS party_songs
CASCADE;
DROP TABLE IF EXISTS party_id
CASCADE;
DROP TABLE IF EXISTS songs
CASCADE;
DROP TABLE IF EXISTS party_users
CASCADE;



CREATE TABLE users
(
  id SERIAL PRIMARY KEY NOT NULL,
  email varchar(255) NOT NULL,
  spotify_client_id varchar(255) NOT NULL,
);

CREATE TABLE party
(
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL,
  genre varchar(255) NOT NULL,
  duration_time timestamp,
  bpm_minimum integer,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE party_songs
(
  id SERIAL PRIMARY KEY NOT NULL,
  upvote integer,
  party_id INTEGER REFERENCES party(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  song_id INTEGER REFERENCES songs(id) ON DELETE CASCADE,
);


CREATE TABLE songs
(
  id SERIAL PRIMARY KEY NOT NULL,
  spotify_uuid varchar(255) NOT NULL,
  title varchar(255) NOT NULL,
  artist varchar(255) NOT NULL,
  album varchar(255) NOT NULL,
  album_art_url varchar(255) NOT NULL,
  preview_url varchar(255) NOT NULL,
  spotify_url varchar(255) NOT NULL,
  genre varchar(255) NOT NULL,
  duration_time timestamp,
  bpm_minimum integer,
);

CREATE TABLE party_users
(
  id SERIAL PRIMARY KEY NOT NULL,
  party_id INTEGER REFERENCES party(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);