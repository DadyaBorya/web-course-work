import React, {useEffect} from 'react';
import CarListItem from "../CarListItem/CarListItem";
import {setAvailable} from "../../controllers/CarController";

const CarList = ({carList, title, className, fetchCars, handleOpenEditModal}) => {

    const handleCarListItem = (carId) => {
        setAvailable(carId).then(data => {
            fetchCars()
        })
    }

    return (
        <div className={`row justify-content-center gap-4 ${className}`}>
            <div className={"text-center h3"}>{title} ({carList.length})</div>

            {carList.length === 0 && (
                <div className={"text-center h4 text-secondary"}>Немає даних</div>
            )}

            {carList.map(car => (
                <CarListItem handleEditCarListItem={handleOpenEditModal} handleRemoveCarListItem={handleCarListItem} className={"col-4"} key={car.id} car={car}/>
            ))}
        </div>
    );
};

export default CarList;