import { createMachine } from "../models/machine.model.js"

export const registerMachineService = (user_id, data) =>
    createMachine(user_id, data)
