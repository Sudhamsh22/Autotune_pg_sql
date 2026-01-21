import { db } from "../config/db.js"

export const createMachine = (user_id, data) =>
    db.query(
        `INSERT INTO machines 
        (user_id, chassis_type, manufacturer, model_series, production_year, mileage_km)
        VALUES ($1,$2,$3,$4,$5,$6)`,
        [
            user_id,
            data.chassis_type,
            data.manufacturer,
            data.model_series,
            data.production_year,
            data.mileage_km
        ]
    )
