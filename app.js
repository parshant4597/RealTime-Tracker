const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// View engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// Socket.IO
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Receive location
  socket.on('send-location', (data) => {
    io.emit('receive-location', {
      id: socket.id,
      ...data
    });

    console.log('Location received:', data);
  });

  // Disconnect
  socket.on('disconnect', () => {
    io.emit('user-disconnected', socket.id);
    console.log('A user disconnected:', socket.id);
  });
});

// Server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
