import { httpServer } from "./http_server/index.js";
import { createWsServer } from "./ws_server/index.js";

const HTTP_PORT = 8181;
const WS_POST = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

createWsServer(WS_POST);
