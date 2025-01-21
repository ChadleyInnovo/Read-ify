import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "admin123" // In production, use proper auth system

export async function authenticate(formData: FormData) {
  const username = formData.get("username")
  const password = formData.get("password")

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    cookies().set("admin-session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 24 hours
    })
    return { success: true }
  }

  return { success: false, error: "Invalid credentials" }
}

export async function checkAuth() {
  const session = cookies().get("admin-session")
  if (!session || session.value !== "authenticated") {
    redirect("/admin/login")
  }
}

export async function logout() {
  cookies().delete("admin-session")
  redirect("/admin/login")
}

