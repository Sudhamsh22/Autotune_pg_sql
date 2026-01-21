import { db } from "../config/db.js"

export const createUser = (full_name, email, password_hash) =>
    db.query(
        "INSERT INTO users (full_name, email, password_hash) VALUES ($1,$2,$3) RETURNING id,email",
        [full_name, email, password_hash]
    )

export const getUserByEmail = email =>
    db.query("SELECT * FROM users WHERE email=$1", [email])
