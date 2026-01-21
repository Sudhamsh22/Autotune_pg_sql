import { signupService, loginService } from "../services/auth.service.js"

export const signup = async (req, res) => {
    const token = await signupService(req.body)
    res.status(201).json({ token })
}

export const login = async (req, res) => {
    const token = await loginService(req.body)
    res.json({ token })
}
