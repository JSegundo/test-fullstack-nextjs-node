"use server"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import { API_URL } from "../config"

export async function addUser(
  prevState: {
    message: string
  },
  formData: FormData
) {
  const schema = z.object({
    name: z.string().min(2),
    username: z.string().min(2),
    email: z.string().min(2),
    address: z.string().min(2),
  })
  const parse = schema.safeParse({
    name: formData.get("name"),
    username: formData.get("username"),
    email: formData.get("email"),
    address: formData.get("address"),
  })

  if (!parse.success) {
    return { message: "Failed to create todo" }
  }

  const userData = parse.data

  try {
    const response = await fetch(`${API_URL}/api/register`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })

    const data = await response.json()

    if (response.ok) {
      revalidatePath("/")
      return { message: "User registered successfully!" }
    } else {
      return { message: data.message }
    }
  } catch (err) {
    return { message: `${err}` }
  }
}
