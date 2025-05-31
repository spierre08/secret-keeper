import { Router } from "express";
import LogController from "./log.controller.js";

const route = Router();

route.get("/", LogController.getAll);
route.delete("/", LogController.delete);

export default route;
