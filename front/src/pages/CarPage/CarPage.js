import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import AddCarModal from "../../components/Modal/CarModal/AddCarModal";
import CarList from "../../components/CarList/CarList";
import {createCar, getAllCars, updateCar} from "../../controllers/CarController";
import {validateCar} from "../../components/Modal/CarModal/utils";
import EditCarModal from "../../components/Modal/CarModal/EditCarModal";

const CarPage = () => {
    const [cars, setCars] = useState([])
    const [carId, setCarId] = useState(-1)
    const [showEditCar, setShowEditCar] = useState(false)


    useEffect(() => {
        fetchCars()
    }, [])

    const fetchCars = () => {
        getAllCars()
            .then(data => {
                console.log(data)
                setCars(data)
            })
            .catch(e => {
                console.log(e.message)
            })
    }

    const handleSubmitAddCar = (car, setErrors, images) => {
        const errors = validateCar(car, images)
        setErrors(errors)

        if (Object.getOwnPropertyNames(errors).length !== 0) {
            return false
        }

        createCar(car, images).then(
            () => {
                fetchCars()
            }
        ).catch(e => {
            console.log(e)
        })

        return true
    }

    const handleSubmitEditCar = (car, setErrors, images) => {
        const errors = validateCar(car, images)
        setErrors(errors)

        if (Object.getOwnPropertyNames(errors).length !== 0) {
            return false
        }

        updateCar(car, images).then(() => {
            fetchCars()
        }).catch(e => {
            console.log(e.message)
        })

        return true
    }

    const handleOpenEditModal = (id) => {
        setShowEditCar(true)
        setCarId(id)
    }

    const makeAvailableArrs = () => {
        let arr = []

        if(cars.available) {
            arr = [...cars.available]
        }

        if(cars.waiting) {
            arr = [...arr, ...cars.waiting]
        }

        if(cars.inprogress) {
            arr = [...arr, ...cars.inprogress]
        }

        return arr
    }

    return (
        <Container>
            <AddCarModal
                className={"text-center py-4"}
                handleSubmit={handleSubmitAddCar}
            />

            <EditCarModal
                show={showEditCar}
                setShow={setShowEditCar}
                carId={carId}
                handleSubmit={handleSubmitEditCar}
            />

            {cars && (
                <CarList handleOpenEditModal={handleOpenEditModal} fetchCars={fetchCars} className={"text-center pb-4"}
                         carList={makeAvailableArrs()} title={"Транспорт в наявності"}/>
            )}

            {cars.unavailable && (
                <CarList fetchCars={fetchCars} className={"text-center pb-4"} carList={cars.unavailable}
                         title={"Транспорт знятий з обліку"}/>
            )}
        </Container>
    );
};

export default CarPage;