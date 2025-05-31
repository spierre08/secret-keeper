import mongoose from "mongoose";

const { Schema } = mongoose;
const UserSchema = new Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
