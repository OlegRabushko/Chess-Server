interface Players {
  id: number;
  name: string;
}
let players: Players[] = [];
let turnQueue: boolean = true;

export function getPlayers(): Promise<Players[]> {
  return Promise.resolve(players);
}

export function createPlayer(data: Players): Promise<Players> {
  const isExists = players.findIndex((el) => el.name === data.name) >= 0;
  if (!isExists) {
    const updatedState: Players = { ...data };
    players.push(updatedState);
    return Promise.resolve(updatedState);
  } else {
    return Promise.reject(new Error("Player exist!"));
  }
}
export function deletePlayers(data: Players): Promise<void> {
  players = [];
  return Promise.resolve();
}
export function deletePlayer(id: number): Promise<void> {
  const playerId = players.findIndex((player) => player.id === id);
  if (playerId < 0) return Promise.reject(new Error("Category not found"));
  players.splice(playerId, 1);
  return Promise.resolve();
}
////////////////////
export function getTurnQueue(): Promise<boolean> {
  return Promise.resolve(turnQueue);
}
export function updateTurnQueue(data: boolean): Promise<boolean> {
  const updatedState: boolean = data;
  turnQueue = updatedState;
  return Promise.resolve(updatedState);
}
/////////////////////
