import mongoose from "mongoose";

const { Schema, Types } = mongoose;
const LogSchema = new Schema(
  {
    user_id: {
      type: Types.ObjectId,
      ref: "User",
    },
    login_date: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
    collection: "login-histories",
  }
);

const LoginModel = mongoose.model("LoginHistory", LogSchema);

export default LoginModel;
