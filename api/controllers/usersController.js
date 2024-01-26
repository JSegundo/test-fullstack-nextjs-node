import User from "../schemas/user.js"
export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export const syncUsers = async (req, res) => {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await resp.json()

    for (const user of users) {
      const { name, username, email } = user
      const lat = parseFloat(user.address.geo.lat)
      const lng = parseFloat(user.address.geo.lng)

      const filter = { email: user.email }
      const update = {
        $set: {
          name,
          username,
          email,
          externalId: user.id,
          address: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
          coordinates: { lat, lng },
        },
      }
      const options = { upsert: true, new: true }

      const updatedUser = await User.findOneAndUpdate(filter, update, options)

      if (updatedUser) {
        console.log(
          `User with email ${user.email} updated/created successfully.`
        )
      } else {
        console.log(`Failed to update/create user with email ${user.email}.`)
      }
    }

    res.json({ message: "Users synchronized successfully" })
  } catch (error) {
    console.error("Error syncing users:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export const createUser = async (req, res) => {
  const { name, username, address, email } = req.body
  try {
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    })

    if (existingUser) {
      return res.status(400).json({
        message: "User with the same email or username already exists",
      })
    }

    const newUser = await User.create({
      name,
      username,
      address,
      email,
      externalId: 0,
    })

    res.json(newUser)
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export default { getUsers, syncUsers, createUser }
