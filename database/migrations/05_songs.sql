DROP TABLE IF EXISTS songs
CASCADE;

CREATE TABLE songs
(
  id SERIAL PRIMARY KEY NOT NULL,
  spotify_uuid varchar(255),
  title varchar(255) NOT NULL,
  artists varchar(255) NOT NULL,
  album varchar(255),
  album_art_url varchar(255),
  preview_url varchar(255),
  spotify_url varchar(255),
  genre varchar(255),
  duration_ms timestamp,
  tempo integer,
  danceability integer
);