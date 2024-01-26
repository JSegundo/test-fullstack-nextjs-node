import express from "express"
import cors from "cors"
import config from "./config/config.js"
import routes from "./routes/users.js"
import connectDB from "./config/db.js"
const app = express()

// middlewares
app.use(cors())
app.use(express.json())

connectDB()

app.use("/api", routes)

app.listen(config.port, () => {
  console.log("app listening on http://localhost:" + config.port)
})
