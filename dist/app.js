"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const events_1 = __importDefault(require("events"));
const router_1 = __importDefault(require("./server/router"));
const ws_1 = __importDefault(require("ws"));
const PORT = process.env.PORT || 3001;
const emitter = new events_1.default.EventEmitter();
const app = express_1.default();
const server = require("http").createServer(app);
const wss = new ws_1.default.Server({
    server: server,
}, () => console.log("WebSocket started"));
app.use(cors_1.default());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/////
app.use(express_1.default.json());
app.use("/state", router_1.default);
// app.get("/get-players", (req, res) => {
//   emitter.once("newPlayer", (player) => {
//     res.json(player);
//   });
// });
app.post("/new-player", (req, res) => {
    const player = req.body;
    emitter.emit("newPlayer", player);
    res.status(200);
});
wss.on("connection", function connection(ws) {
    ws.on("message", function (info) {
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
    ws.send("Connection");
});
function broadcastMessage(boardState) {
    wss.clients.forEach((client) => {
        client.send(JSON.stringify(boardState));
    });
}
server.listen(PORT, () => console.log("Server started"));
//# sourceMappingURL=app.js.map