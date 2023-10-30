import React, {useEffect, useState} from 'react';
import ModalView from "../Modal";
import CarInputs from "../../CarInputs/CarInputs";
import {inputs} from "./utils";
import {getCarById} from "../../../controllers/CarController";

const EditCarModal = ({show, setShow, carId, handleSubmit}) => {

    const [car, setCar] = useState({
        brand: '',
        number: '',
        year: '',
        people: '',
        weight: '',
    })

    const [errors, setErrors] = useState({})

    const [images, setImages] = useState([])

    const setDefault = () => {
        setCar({
            brand: '',
            number: '',
            year: '',
            people: '',
            weight: '',
        });
        setErrors({})
        setImages([])
    }

    useEffect(() => {
        getCarById(carId).then(data => {
            if(data) {
                setCar(data)
                setImages(data.car_images)
            }
        })
    }, [carId])


    return (
        <div>
            <ModalView
                show={show}
                setShow={setShow}
                isHiddenButton={true}
                buttonOpenText={"Редагування транспорту"}
                headerText={"Редагування транспорту"}
                buttonCloseText={"Закрити"}
                buttonSubmitText={"Змінити"}
                setDefaultInstase={setDefault}
                handleSubmit={() => handleSubmit(car, setErrors, images)}
                content={
                    <CarInputs
                        car={car}
                        setCar={setCar}
                        images={images}
                        setImages={setImages}
                        inputs={inputs}
                        inputsErrors={errors}
                    />
                }
            />
        </div>
    );
};

export default EditCarModal;