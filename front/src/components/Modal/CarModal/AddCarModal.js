import React, {useState} from 'react';
import ModalView from "../Modal";
import CarInputs from "../../CarInputs/CarInputs";
import {inputs, validateCar} from "./utils";
import {createCar} from "../../../controllers/CarController"


const AddCarModal = ({
                         handleSubmit,
                         className,
                         buttonOpenText = "Додати машину",
                         headerText = "Закрити",
                         buttonSubmitText = "Додати"
                     }) => {

    const [car, setCar] = useState({
        brand: '', number: '', year: '', people: '', weight: '',
    })

    const [errors, setErrors] = useState({})

    const [images, setImages] = useState([])

    const setDefault = () => {
        setCar({
            brand: '', number: '', year: '', people: '', weight: '',
        })
        setErrors({})
        setImages([])
    }

    return (<div className={className}>
        <ModalView
            buttonOpenText={buttonOpenText}
            headerText={headerText}
            buttonCloseText={"Закрити"}
            buttonSubmitText={buttonSubmitText}
            setDefaultInstase={setDefault}
            content={<CarInputs
                car={car}
                setCar={setCar}
                images={images}
                setImages={setImages}
                inputs={inputs}
                inputsErrors={errors}
            />}
            handleSubmit={() => handleSubmit(car, setErrors, images)}
        />
    </div>);
};

export default AddCarModal;