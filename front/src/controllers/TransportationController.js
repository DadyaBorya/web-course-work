import {$host} from "../api";

export const createTransportation =  async (transportation) => {
    try {
        const response = await $host.post("/api/transportation/create", transportation)
        return response
    } catch (e) {
        return e.message
    }
}

export const getAllTransportation = async () => {
    try {
        const response = await $host.get("/api/transportation")
        return response.data
    } catch (e) {
        return e.message
    }
}

export const setStatus = async (id, status) => {
    try {
        const response = await $host.post("/api/transportation/status", {id, status})
        return response
    } catch (e) {
        return e.message
    }
}