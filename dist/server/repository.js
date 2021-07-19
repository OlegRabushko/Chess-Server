"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTurnQueue = exports.getTurnQueue = exports.deletePlayer = exports.deletePlayers = exports.createPlayer = exports.getPlayers = void 0;
let players = [];
let turnQueue = true;
function getPlayers() {
    return Promise.resolve(players);
}
exports.getPlayers = getPlayers;
function createPlayer(data) {
    const isExists = players.findIndex((el) => el.name === data.name) >= 0;
    if (!isExists) {
        const updatedState = Object.assign({}, data);
        players.push(updatedState);
        return Promise.resolve(updatedState);
    }
    else {
        return Promise.reject(new Error("Player exist!"));
    }
}
exports.createPlayer = createPlayer;
function deletePlayers(data) {
    players = [];
    return Promise.resolve();
}
exports.deletePlayers = deletePlayers;
function deletePlayer(id) {
    const playerId = players.findIndex((player) => player.id === id);
    if (playerId < 0)
        return Promise.reject(new Error("Category not found"));
    players.splice(playerId, 1);
    return Promise.resolve();
}
exports.deletePlayer = deletePlayer;
////////////////////
function getTurnQueue() {
    return Promise.resolve(turnQueue);
}
exports.getTurnQueue = getTurnQueue;
function updateTurnQueue(data) {
    const updatedState = data;
    turnQueue = updatedState;
    return Promise.resolve(updatedState);
}
exports.updateTurnQueue = updateTurnQueue;
/////////////////////
//# sourceMappingURL=repository.js.map