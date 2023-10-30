const ApiError = require("../error/ApiError")
const carService = require("../services/CarService")

class CarController {
    async create(req, res, next) {
        try {
            const body = JSON.parse(req.body.car)

            const result = await carService.create({...body, images: req.files})
            return res.json(result)
        } catch (e) {
             next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const result = await carService.getAll()
            return res.json(result)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getById(req, res, next) {
        try {
            const result = await carService.getById(req.params.id)
            return res.json(result)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateById(req, res, next) {
        try {
            await carService.updateById(JSON.parse(req.body.car), req.files)

            res.json({message: "Updated"})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async setAvailable(req, res, next) {
        try {
            await carService.setAvailable(req.body.carId)
            res.json({message: "updated"})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new CarController();