import express from "express";
import cors from "cors";
import events from "events";
import Router from "./server/router";

const emitter = new events.EventEmitter();

const app = express();
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.use("/state", Router);

app.get("/get-players", (req, res) => {
  emitter.once("newPlayer", (player) => {
    res.json(player);
  });
});

app.post("/new-player", (req, res) => {
  const player = req.body;
  emitter.emit("newPlayer", player);
  res.status(200);
});

app.listen(3002, () => console.log("Server started"));
