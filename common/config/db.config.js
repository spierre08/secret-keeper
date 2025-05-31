import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export default mongoose
  .connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("Connected successfuly to the Database !!!");
  })
  .catch((error) => {
    console.log(error);
  });
