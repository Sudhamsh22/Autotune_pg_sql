import express from "express"
import cors from "cors"
import "./config/env.js"
import authRoutes from "./routes/auth.routes.js"
import machineRoutes from "./routes/machine.routes.js"
import { notFoundMiddleware } from "./middleware/notFound.middleware.js"
import { errorMiddleware } from "./middleware/error.middleware.js"

const app = express()

app.use(cors({
    origin: [
        
        "https://autotune-frontend-7nyqmpodq-bhanutejanallamothus-projects.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/machines", machineRoutes)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

export default app
