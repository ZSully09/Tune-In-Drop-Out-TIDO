DROP TABLE IF EXISTS songs
CASCADE;

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