import { Router } from "express";
import {
  createPlayer,
  getPlayers,
  getTurnQueue,
  updateTurnQueue,
  deletePlayers,
  deletePlayer,
} from "./repository";

const router = Router();
//////////////////////////
router.get("/", async (req, res) => {
  const players = await getPlayers();
  return res.json(players);
});

router.post("/", async (req, res) => {
  const player = req.body;
  if (!player.name) return res.sendStatus(400);
  try {
    const newCategory = await createPlayer(player);
    return res.json(newCategory);
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.delete("/", async (req, res) => {
  const data = req.body;
  if (!data) {
    return res.sendStatus(400);
  }
  try {
    await deletePlayers(data);
  } catch (e) {
    return res.status(404).send(e);
  }
});
router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!id) {
    return res.sendStatus(400);
  }
  try {
    await deletePlayer(id);
  } catch (e) {
    return res.status(404).send(e);
  }
});

////////////////
router.get("/queue", async (req, res) => {
  const queue = await getTurnQueue();
  return res.json(queue);
});

router.put("/queue", async (req, res) => {
  const data = req.body;
  try {
    const queue = await updateTurnQueue(data[0]);
    return res.json(queue);
  } catch (e) {
    return res.status(400).send(e);
  }
});

export default router;
