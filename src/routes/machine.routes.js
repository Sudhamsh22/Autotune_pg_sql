import express from "express"
import { registerMachine } from "../controllers/machine.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"
import { machineValidation } from "../middleware/validation.middleware.js"
import { asyncHandler } from "../middleware/asyncHandler.js"

const router = express.Router()

router.post("/", authMiddleware, machineValidation, asyncHandler(registerMachine))

export default router
