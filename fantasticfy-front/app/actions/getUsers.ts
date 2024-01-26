"use server"

import { API_URL } from "../config"

export async function getUsers() {
  try {
    const res = await fetch(`${API_URL}/api/users`, {
      next: { revalidate: 10 },
    })
    const users = await res.json()
    return users
  } catch (err) {
    console.error(err)
    return { error: "something went wrong" }
  }
}
