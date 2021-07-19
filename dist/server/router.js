"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const repository_1 = require("./repository");
const router = express_1.Router();
//////////////////////////
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const players = yield repository_1.getPlayers();
    return res.json(players);
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const player = req.body;
    if (!player.name)
        return res.sendStatus(400);
    try {
        const newCategory = yield repository_1.createPlayer(player);
        return res.json(newCategory);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}));
router.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    if (!data) {
        return res.sendStatus(400);
    }
    try {
        yield repository_1.deletePlayers(data);
    }
    catch (e) {
        return res.status(404).send(e);
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    if (!id) {
        return res.sendStatus(400);
    }
    try {
        yield repository_1.deletePlayer(id);
    }
    catch (e) {
        return res.status(404).send(e);
    }
}));
////////////////
router.get("/queue", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queue = yield repository_1.getTurnQueue();
    return res.json(queue);
}));
router.put("/queue", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const queue = yield repository_1.updateTurnQueue(data[0]);
        return res.json(queue);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}));
exports.default = router;
//# sourceMappingURL=router.js.map