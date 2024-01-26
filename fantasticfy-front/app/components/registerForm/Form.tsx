"use client"
import React from "react"
import { addUser } from "@/app/actions/addUser"
import { useFormState, useFormStatus } from "react-dom"
import { FaCircleInfo } from "react-icons/fa6"
import "./form.css"

const Form = () => {
  const { pending } = useFormStatus()
  const [state, formAction] = useFormState(addUser, { message: "" })

  return (
    <div className="adduser-page">
      <div className="form">
        <form className="register-form" action={formAction}>
          <input type="text" placeholder="Name" name="name" required />
          <input type="text" name="username" placeholder="Username" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="address" placeholder="Address" required />
          {/* <input type="text" name="location" placeholder="Location (optional)" /> */}
          <button type="submit" disabled={pending}>
            create
          </button>
          <p
            style={{
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {state.message ? (
              <>
                <FaCircleInfo /> {state?.message}
              </>
            ) : (
              <></>
            )}
          </p>
        </form>
      </div>
    </div>
  )
}

export default Form
