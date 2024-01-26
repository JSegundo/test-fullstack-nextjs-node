import express from "express"
import {
  getUsers,
  syncUsers,
  createUser,
} from "../controllers/usersController.js"

const router = express.Router()

router.get("/users", getUsers)
router.post("/sync", syncUsers)
router.put("/register", createUser)

export default router
