import { Piece } from "./server/chess-state";
import ws from "ws";

const wss = new ws.Server(
  {
    port: 3001,
  },
  () => console.log("WebSocket started")
);

wss.on("connection", function connection(ws) {
  ws.on("message", function (info: any) {
    info = JSON.parse(info);
    switch (info.event) {
      case "move-message":
        broadcastMessage(info);
        break;
      case "queue":
        broadcastMessage(info);
        break;
      case "loss":
        broadcastMessage(info);
        break;
      case "players":
        broadcastMessage(info);
        break;
      case "check-chessboard":
        broadcastMessage(info);
        break;
    }
  });
  ws.send("Пользователь подключился");
});

function broadcastMessage(boardState: Piece[]) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(boardState));
  });
}
