// const createError = require("http-errors");
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/routes');

const port = 4001;

//Setting up express and adding socketIo middleware
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
// const io = socketIo(server).listen(server);

// Heroku
app.use(express.static(path.join(__dirname, '/../../react-front-end/build/')));

//Setting up a socket with the namespace "connection" for new sockets
io.on('connection', socket => {
  console.log('New client connected');

  //Here we listen on a new namespace called "incoming data"
  socket.on('incoming data', data => {
    //Here we broadcast it out to all other sockets EXCLUDING the socket which sent us the data
    socket.broadcast.emit('outgoing data', { num: data });
  });

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
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

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

// Mount the songs routes at the "/party" path prefix:
app.use('/songs', songRoutes);

app.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname + '/../../react-front-end/build/index.html')
  );
});

module.exports = app;
