const {CarModel, CarImageModel} = require("../models/models");

class CarService {
    async create({brand, number, year, people, weight, images}) {
        const car = await CarModel.create({
            brand,
            number,
            year,
            people,
            weight,
            status: "AVAILABLE"
        });

        for (const i of images) {
            await CarImageModel.create({
                car_id: car.id,
                src: `uploads/${i.filename}`,
            });
        }

        return {...car.dataValues, images: images.map(i => `uploads/${i.filename}`)}
    }

    async getAll() {
        const cars = await CarModel.findAll(
            {
                include: [
                    {
                        model: CarImageModel
                    }
                ]
            }
        )
        const groupedCars = cars.reduce((acc, car) => {
            const status = car.status.toLowerCase();
            if (!acc[status]) {
                acc[status] = [];
            }
            acc[status].push(car);
            return acc;
        }, {});

        return groupedCars;
    }

    async setAvailable(carId) {
        const car = await this.getById(carId)

        await car.update(
            {
                removedAt: car.removedAt ? null : new Date(),
                status: car.status !== "AVAILABLE" ? "AVAILABLE" : "UNAVAILABLE"
            }
        )
        await car.save()
    }

    async updateById(car, images) {
        if (car.car_images) {
            delete car.car_images
        }

        const carId = car.id

        const carDb = await this.getById(carId)
        await carDb.update({
            ...car
        })

        if(images.length !== 0) {
            await CarImageModel.destroy({
                where: {
                    car_id: carId
                }
            })

            for (const i of images) {
                await CarImageModel.create({
                    car_id: car.id,
                    src: `uploads/${i.filename}`,
                });
            }
        }
    }

    async getById(carId) {
        const car = await CarModel.findOne({
            where: {
                id: carId
            },
            include: [
                {
                    model: CarImageModel
                }
            ]
        })

        return car
    }
}

module.exports = new CarService();