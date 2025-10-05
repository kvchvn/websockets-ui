import { WebSocketServer } from "ws";

export const createWsServer = (port: number) => {
  const wss = new WebSocketServer({ host: "localhost", port });
  console.log(`Start static ws server on the ${port} port!`);

  return wss;
};
