/**
 * IMPORTANT FOR FILES OUTSIDE OF /CLIENT/: Always import using `.js` even though it's a `.ts` file.
 */

import { MultiplayerSocketServer } from '../shared/multiplayer/MultiplayerSocketServer.js';

const gameServer = new MultiplayerSocketServer();
gameServer.start(3001);
