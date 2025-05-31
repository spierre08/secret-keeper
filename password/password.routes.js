import { Router } from "express";
import PasswordController from "./password.controller.js";
import PasswordSchemaValidator from "./validators/password.validator.js";
import Validator from "../common/middlewares/validator.middleware.js";

const route = Router();

route.post("/", Validator(PasswordSchemaValidator), PasswordController.create);
route.get("/:id", PasswordController.getById);
route.get("/by-user/:user_id", PasswordController.getByUserId);
route.patch("/:id", PasswordController.update);
route.delete("/:id", PasswordController.delete);

export default route;
