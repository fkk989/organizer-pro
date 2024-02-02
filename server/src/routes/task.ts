import { Router } from "express";
import { authenticateUser } from "../middleware";
import {
  createTask,
  deleteTask,
  fetchTask,
  fetchTaskById,
  updateTask,
} from "../handlers";

export const taskRouter = Router();

taskRouter.get("/", authenticateUser, fetchTask);

taskRouter.get("/id", authenticateUser, fetchTaskById);

taskRouter.post("/create", authenticateUser, createTask);

taskRouter.put("/update", authenticateUser, updateTask);

taskRouter.delete("/delete", authenticateUser, deleteTask);
