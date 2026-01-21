import { registerMachineService } from "../services/machine.service.js"

export const registerMachine = async (req, res) => {
    await registerMachineService(req.user.id, req.body)
    res.status(201).json({ message: "Machine registered" })
}
