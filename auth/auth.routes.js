import { Router } from "express";
import AuthController from "./auth.controller.js";
import LoginSchemaValidator from "./validators/login.validator.js";
import Validator from "../common/middlewares/validator.middleware.js";

const route = Router();

route.post("/login", Validator(LoginSchemaValidator), AuthController.login);
route.get("/by-email/:email", AuthController.getByEmail);
route.get("/by-user-name/:user_name", AuthController.getByUserName);
route.patch("/update-password/:email", AuthController.update);

export default route;
