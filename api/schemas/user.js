import mongoose from "mongoose"
import { v4 as uuidv4 } from "uuid"

const Schema = mongoose.Schema

const UserSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  name: String,
  username: String,
  email: String,
  externalId: String,
  address: String,
  coordinates: {
    lat: String,
    lng: String,
  },
})

const User = mongoose.model("UserModel", UserSchema)
export default User
