import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import Register from '../components/registration/Registration';
import Create from '../components/create/Create';
import Party from '../components/party_room/Party';
import Header from '../components/party_room/header/Header';
import SearchBar from '../components/party_room/search_bar/SearchBar';
import Song from '../components/party_room/playlist/song/Song';
import Playlist from '../components/party_room/playlist/Playlist';

storiesOf('SeachBar', module).add('search', () => <SearchBar></SearchBar>);

storiesOf('Home', module).add('Home', () => <Home></Home>);

storiesOf('Login', module).add('Login', () => <Login></Login>);

storiesOf('Register', module).add('Register', () => <Register></Register>);

storiesOf('Create', module).add('Create', () => <Create></Create>);

storiesOf('Party', module).add('Party', () => <Party></Party>);

storiesOf('Header', module).add('Header', () => <Header></Header>);

storiesOf('Song', module).add('Song', () => <Song></Song>);

storiesOf('Playlist', module).add('Playlist', () => <Playlist></Playlist>);
