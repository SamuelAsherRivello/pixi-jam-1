import { MultiplayerServerSystem } from './multiplayer/MultiplayerServer.js';

const gameServer = new MultiplayerServerSystem();
gameServer.start(3001);
