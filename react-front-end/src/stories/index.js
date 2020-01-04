import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import Button from 'components/Button.js';
import CurrentSongPlaying from '../components/CurrentSongPlaying';
import CurrentSongPaused from '../components/CurrentSongPaused';
import CurrentSongNone from '../components/CurrentSongNone';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Registration';
import Create from '../components/Create';
import SearchBar from '../components/SearchBar';
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
