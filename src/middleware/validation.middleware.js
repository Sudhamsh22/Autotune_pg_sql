export const signupValidation = (req, res, next) => {
    const { full_name, email, password } = req.body
    if (!full_name || !email || !password || password.length < 8) {
        return res.status(400).json({ message: "Invalid input" })
    }
    next()
}

export const loginValidation = (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: "Invalid input" })
    }
    next()
}

export const machineValidation = (req, res, next) => {
    const { chassis_type, manufacturer, model_series, production_year, mileage_km } = req.body
    if (
        !["2_WHEEL", "4_WHEEL"].includes(chassis_type) ||
        !manufacturer ||
        !model_series ||
        production_year < 1900 ||
        mileage_km < 0
    ) {
        return res.status(400).json({ message: "Invalid input" })
    }
    next()
}
