import { Types } from "mongoose";

class AppConfig {
  static prefix = "/api/v1";
  static PORT = process.env.PORT || 4040;
  static objectId = Types.ObjectId;
  static CORS_ORIGIN = ["http://localhost:5173", "http://localhost:4200", "http://localhost:3000"];
}

export default AppConfig;
