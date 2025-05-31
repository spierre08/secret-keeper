import mongoose from "mongoose";

const { Schema, Types } = mongoose;
const PasswordSchema = new Schema(
  {
    user_id: {
      type: Types.ObjectId,
      ref: "User",
    },
    user_name: {
      type: String,
      required: true,
    },
    service_name: {
      type: String,
      require: true,
    },
    password_ecrypt: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "passwords",
  }
);

const PasswordModel = mongoose.model("Password", PasswordSchema);

export default PasswordModel;
