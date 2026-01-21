import express from "express"
import { signup, login } from "../controllers/auth.controller.js"
import { signupValidation, loginValidation } from "../middleware/validation.middleware.js"
import { asyncHandler } from "../middleware/asyncHandler.js"

const router = express.Router()

router.post("/signup", signupValidation, asyncHandler(signup))
router.post("/login", loginValidation, asyncHandler(login))

export default router
