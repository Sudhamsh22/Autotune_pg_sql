import { db } from "../config/db.js"

export const createSession = (user_id, token, expires_at) =>
    db.query(
        "INSERT INTO sessions (user_id, token, expires_at) VALUES ($1,$2,$3)",
        [user_id, token, expires_at]
    )

export const deleteSession = token =>
    db.query("DELETE FROM sessions WHERE token=$1", [token])

export const getSession = token =>
    db.query("SELECT * FROM sessions WHERE token=$1", [token])
