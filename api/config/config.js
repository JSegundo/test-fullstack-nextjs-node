import dotenv from "dotenv"
dotenv.config()

const config = {
  port: process.env.PORT || 3000,
  mongodb_uri: process.env.MONGODB_URI,
}

export { config as default }
