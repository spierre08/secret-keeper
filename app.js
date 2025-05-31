import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import AppConfig from "./common/config/app.config.js";
import UserRouter from "./user/user.routes.js";
import AuthRouter from "./auth/auth.routes.js";
import LogHistoryRouter from "./login-history/log.routes.js";
import PasswordRouter from "./password/password.routes.js";

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("uploads/image"));
app.use(
  cors({
    origin: AppConfig.CORS_ORIGIN,
  })
);

app.use(`${AppConfig.prefix}/users`, UserRouter);
app.use(`${AppConfig.prefix}/auths`, AuthRouter);
app.use(`${AppConfig.prefix}/log-histories`, LogHistoryRouter);
app.use(`${AppConfig.prefix}/passwords`, PasswordRouter);

export default app;
