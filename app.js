const express = require('express');
const app = express();
const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);

const io = socketIo(server);
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  socket.on('send-location', (data) => {
    io.emit('receive-location', {
      id : socket.id,
      ...data
    });
    socket.on('disconnect', () => {
      io.emit('user-disconnected', socket.id);
      console.log('A user disconnected');
    });
    console.log('Location received:', data);
    // Here you can handle the received location data as needed
  }),
  console.log('A user connected');  
  });

app.get('/', (req, res) => { 
  res.render('index');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;   