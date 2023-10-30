const {TransportationModel, CarModel} = require("../models/models");
const carService = require("../services/CarService")

class TransportationService {
    async create(transportation) {
        transportation.car_id = transportation.carId
        transportation.status = "WAITING"
        delete transportation["carId"]

        const newTransportation = await TransportationModel.create({
            ...transportation
        })

        const car = await carService.getById(transportation.car_id)
        await car.update({
            status: "WAITING"
        })

        return newTransportation
    }

    async getAll() {
        const transports = await TransportationModel.findAll({
            include: {
                model: CarModel
            }
        })
        return transports
    }

    async setTransStatus(id, status) {
        const transport = await TransportationModel.findOne({
            where: {
                id
            }
        })

        await transport.update({
            status
        })

        await transport.save()

        if(status !== "WAITING" && status !== "INPROGRESS") {
            const car = await CarModel.findOne({
                where: {
                    id: transport.car_id
                }
            })

            await car.update({
                status: "AVAILABLE"
            })

            await car.save()
        }
    }
}

module.exports = new TransportationService();