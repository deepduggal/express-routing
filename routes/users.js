import { Router } from "express";

const usersRouter = Router();
usersRouter.get("/", (req, res) => {
  res.send("List of all users: []");
});

usersRouter.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

export default usersRouter;