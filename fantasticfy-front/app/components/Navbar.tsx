"use client"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"
import "./navbar.css"
const Navbar = () => {
  const pathname = usePathname()

  return (
    <header>
      <nav>
        <button>
          {pathname === "/register" ? (
            <Link href={"/"}>List users</Link>
          ) : (
            <Link href={"register"}>Add user</Link>
          )}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
