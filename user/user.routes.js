import { Router } from "express";
import UserController from "./user.controller.js";
import UserSchemaValidator from "./validators/user.validator.js";
import Validator from "../common/middlewares/validator.middleware.js";

const route = Router();

route.post("/", Validator(UserSchemaValidator), UserController.create);
route.get("/:id", UserController.getById);
route.patch("/:id", UserController.update);
route.delete("/:id", UserController.delete);

export default route;
