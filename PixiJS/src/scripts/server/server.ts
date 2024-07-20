import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000", // Adjust this to match your client's origin
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');
    let secondsElapsed = 0;

    // Send initial ping immediately
    socket.emit('message', `Ping From Server after ${secondsElapsed} total seconds`);

    // Send a message to the client every 5 seconds
    const intervalId = setInterval(() => {
        secondsElapsed += 5;
        socket.emit('message', `Ping From Server after ${secondsElapsed} total seconds`);
    }, 5000);

    socket.on('message', (msg) => {
        console.log('Message from client:', msg);
        // Echo the message back to the client
        socket.emit('message', `Server received: ${msg}`);
    });

    socket.on('disconnect', () => {
        clearInterval(intervalId);
        console.log('User disconnected');
    });
});

const PORT = 3001;
httpServer.listen(PORT, () => {
    console.log(`Socket.IO server is running on port ${PORT}`);
});
