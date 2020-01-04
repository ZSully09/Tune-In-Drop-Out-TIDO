import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import Button from 'components/Button.js';
import CurrentSongPlaying from '../components/current_song/CurrentSongPlaying';
import CurrentSongPaused from '../components/current_song/CurrentSongPaused';
import CurrentSongNone from '../components/current_song/CurrentSongNone';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import Register from '../components/registration/Registration';
import Create from '../components/create/Create';
import Party from '../components/party/Party';
import SearchBar from '../components/search_bar/SearchBar';
// storiesOf('Button', module)
//   .addParameters({
//     backgrounds: [{ name: 'dark', value: '#222f3e', default: true }]
//   })
//   .add('Base', () => <Button>Base</Button>)
//   .add('Confirm', () => <Button confirm>Save</Button>)
//   .add('Danger', () => <Button danger>Cancel</Button>)
//   .add('Clickable', () => (
//     <Button onClick={action('button-clicked')}>Clickable</Button>
//   ))
//   .add('Disabled', () => (
//     <Button disabled onClick={action('button-clicked')}>
//       Disabled
//     </Button>
//   ));

storiesOf('CurrentSong', module)
  // .addParameters({
  //   backgrounds: [{ name: 'dark', value: '#222f3e', default: true }]
  // })
  .add('Playing', () => <CurrentSongPlaying></CurrentSongPlaying>)
  .add('Paused', () => <CurrentSongPaused></CurrentSongPaused>)
  .add('None', () => <CurrentSongNone></CurrentSongNone>);

storiesOf('SeachBar', module).add('search', () => <SearchBar></SearchBar>);

storiesOf('Home', module).add('Home', () => <Home></Home>);

storiesOf('Login', module).add('Login', () => <Login></Login>);

storiesOf('Register', module).add('Register', () => <Register></Register>);

storiesOf('Create', module).add('Create', () => <Create></Create>);

storiesOf('Party', module).add('Party', () => <Party></Party>);
