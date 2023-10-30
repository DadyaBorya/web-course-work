import {$host} from "../api";

export const createCar = async (car, images) => {
    try {
        const formData = new FormData();
        for (const key of Object.keys(images)) {
            formData.append("imgCollection", images[key]);
        }

        formData.append("car", JSON.stringify(car))

        const response = await $host.post('api/car/create', formData)

        return response;
    } catch (e) {
        return e.message;
    }
}

export const updateCar = async (car, images) => {
    try {
        const formData = new FormData();

        if (images instanceof FileList) {
            for (const key of Object.keys(images)) {
                formData.append("imgCollection", images[key]);
            }
            delete car["car_images"]
        }

        formData.append("car", JSON.stringify(car))

        await $host.put('api/car/update', formData)
    } catch (e) {
        return e.message;
    }
}

export const getAllCars = async () => {
    try {
        const response = await $host.get("api/car")
        return response.data
    } catch (e) {
        return e.message
    }
}

export const getCarById = async (carId) => {
    try {
        const response = await $host.get(`api/car/${carId}`)
        return response.data
    } catch (e) {
        return e.message
    }
}

export const setAvailable = async (carId) => {
    try {
        const response = await $host.put("api/car/available", {carId})
        return response.data
    } catch (e) {
        return e.message
    }
}