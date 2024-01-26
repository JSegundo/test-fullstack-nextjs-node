// Define your service methods
import User from "../schemas/user"

const getAllUsers = async () => {
  return await User.find()
}

const createNewUser = async (name) => {
  const example = new User({ name })
  return await example.save()
}

export default {
  getAllUsers,
  createNewUser,
}
