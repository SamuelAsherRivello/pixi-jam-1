import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { Socket } from 'socket.io-client';

let socket: any;

function serverConsoleLog(msg: string) {

    //Server logs show in terminal by default
    let newMessage = `[Server] ${msg}`;
    console.log(newMessage);

    //NOTE
    //also send to the client
    if (socket) {
        socket.emit('customEvent', newMessage);
    }

}


const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000", // Adjust this to match your client's origin
        methods: ["GET", "POST"]
    }
});

io.on('connection', (newSocket) => {

    socket = newSocket;

    serverConsoleLog('A user connected: ' + socket.id);
    let secondsElapsed = 0;

    // Send initial ping immediately
    socket.emit('message', `from Server ${secondsElapsed} seconds`);

    // Send a message to the client every 5 seconds
    const intervalId = setInterval(() => {
        secondsElapsed += 5;
        socket.emit('message', `from Server ${secondsElapsed} seconds`);
    }, 5000);

    socket.on('message', (msg: any) => {
        serverConsoleLog('Message from client:' + msg);
        // Echo the message back to the client
        socket.emit('message', `Server received: ${msg}`);
    });

    socket.on('disconnect', () => {
        clearInterval(intervalId);
        serverConsoleLog('User disconnected');
    });
});

const PORT = 3001;
httpServer.listen(PORT, () => {
    serverConsoleLog(`Socket.IO server is running on port ${PORT}`);
});
