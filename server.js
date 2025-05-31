import app from "./app.js";
import AppConfig from "./common/config/app.config.js";
import dbConfig from "./common/config/db.config.js";
import dotenv from "dotenv"

dotenv.config({ path: "./."})

app.listen(AppConfig.PORT, ()=>{
    console.log(`Connected to the PORT--- ${AppConfig.PORT}`)
})