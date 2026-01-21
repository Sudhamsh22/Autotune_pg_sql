import { createUser, getUserByEmail } from "../models/user.model.js"
import { hashPassword, comparePassword } from "../utils/password.js"
import { generateToken } from "../utils/jwt.js"

export const signupService = async data => {
    const hash = await hashPassword(data.password)
    const result = await createUser(data.full_name, data.email, hash)
    return generateToken({ id: result.rows[0].id })
}

export const loginService = async data => {
    const user = await getUserByEmail(data.email)
    if (!user.rows.length) throw new Error("Invalid credentials")

    const match = await comparePassword(data.password, user.rows[0].password_hash)
    if (!match) throw new Error("Invalid credentials")

    return generateToken({ id: user.rows[0].id })
}
