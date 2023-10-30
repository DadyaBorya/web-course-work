const ApiError = require("../error/ApiError");
const transportationService = require("../services/TransportationService")
class TransportationController {
    async create(req, res, next) {
        try {
            const result = await transportationService.create(req.body)
            res.json(result)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const result = await transportationService.getAll()
            res.json(result)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async setStatus(req, res, next) {
        try {
            const {id, status} = req.body
            await transportationService.setTransStatus(id, status)
            res.json({message: "Updated"})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new TransportationController()