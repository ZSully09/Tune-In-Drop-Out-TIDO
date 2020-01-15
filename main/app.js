// const createError = require("http-errors");
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/routes');

const port = 4001;

//Setting up express and adding socketIo middleware
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
// const io = socketIo(server).listen(server);

// Heroku
app.use(express.static(path.join(__dirname, '/../react-front-end/build/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../react-front-end/build/index.html'));
});

// app.post('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/../react-front-end/build/index.html'));
// });

//Setting up a socket with the namespace "connection" for new sockets
io.on('connection', socket => {
  console.log('New client connected');

  //Here we listen on a new namespace called "incoming data"
  socket.on('incoming data', data => {
    //Here we broadcast it out to all other sockets EXCLUDING the socket which sent us the data
    socket.broadcast.emit('outgoing data', { num: data });
  });

  socket.on('joinParty', partyName => {
    socket.join(partyName);
  });

  socket.on('songAdd', payload => {
    console.log(payload);
    let users = payload.room
      ? io.sockets.adapter.rooms[payload.room].sockets
      : {};
    for (let user in users) {
      console.log('user', user);
    }
    socket.to(payload.room).emit('addSong', payload.song);
  });

  // socket.on('currentTrackPlaying', payload => {
  //   console.log(payload);
  //   let users = payload.room
  //     ? io.sockets.adapter.rooms[payload.room].sockets
  //     : {};
  //   for (let user in users) {
  //     console.log('user', user);
  //   }
  //   socket.to(payload.room).emit('addSong', payload.song);
  // });

  // //TODO Socket on {user} vote for {songName}
  // socket.on("");

  //A special namespace "disconnect" for when a client disconnects
  socket.on('disconnect', () => console.log('Client disconnected'));
});

server.listen(port, () => console.log(`Listening on port ${port}`));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(cors());

// The in-memory database of tweets. It's a basic object with an array in it.
const db = require('../lib/in-memory-db');

// The `data-helpers` module provides an interface to the database of songs.
// This simple interface layer has a big benefit: we could switch out the
// actual database it uses and see little to no changes elsewhere in the code
//
// Because it exports a function that expects the `db` as a parameter, we can
// require it and pass the `db` parameter immediately:
const DataHelpers = require('../lib/data-helpers')(db);

// The `songs-routes` module works similarly: we pass it the `DataHelpers` object
// so it can define routes that use it to interact with the data layer.
const songRoutes = require('./routes/songs')(DataHelpers);
const router = require('./routes/userSignin');

// Mount the songs routes at the "/party" path prefix:
app.use('/songs', songRoutes);

module.exports = app;
