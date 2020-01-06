import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CurrentSongPlaying from '../components/party_room/current_song/CurrentSongPlaying';
import CurrentSongPaused from '../components/party_room/current_song/CurrentSongPaused';
import CurrentSongNone from '../components/party_room/current_song/CurrentSongNone';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import Register from '../components/registration/Registration';
import Create from '../components/create/Create';
import Party from '../components/party_room/Party';
import Header from '../components/header/Header';
import SearchBar from '../components/party_room/search_bar/SearchBar';
import Song from '../components/party_room/playlist/song/Song';

storiesOf('CurrentSong', module)
  .add('Playing', () => <CurrentSongPlaying></CurrentSongPlaying>)
  .add('Paused', () => <CurrentSongPaused></CurrentSongPaused>)
  .add('None', () => <CurrentSongNone></CurrentSongNone>);

storiesOf('SeachBar', module).add('search', () => <SearchBar></SearchBar>);

storiesOf('Home', module).add('Home', () => <Home></Home>);

storiesOf('Login', module).add('Login', () => <Login></Login>);

storiesOf('Register', module).add('Register', () => <Register></Register>);

storiesOf('Create', module).add('Create', () => <Create></Create>);

storiesOf('Party', module).add('Party', () => <Party></Party>);

storiesOf('Header', module).add('Header', () => <Header></Header>);

storiesOf('Song', module).add('Song', () => <Song></Song>);
