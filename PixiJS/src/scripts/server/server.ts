import { Server } from "socket.io";
//import { Packet, SessionStartRequest, SessionStartResponse } from "@shared/Packet";

const io = new Server(3001);

io.on('connection', (socket) => {
    console.log('a user connected');

    // socket.on(SessionStartRequest.name, (data: string) => {
    //     const packet = Packet.fromJSON(data, SessionStartRequest);
    //     console.log('Received packet:', packet);

    //     const response = new SessionStartResponse();
    //     socket.emit(SessionStartResponse.name, response.toJSON());
    // });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
