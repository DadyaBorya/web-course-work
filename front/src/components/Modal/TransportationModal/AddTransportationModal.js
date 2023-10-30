import React, {useState} from 'react';
import ModalView from "../Modal";
import TransportationInputs from "../../TransportationInputs/TransportationInputs";
import {inputs} from "./utils";

const AddTransportationModal = ({
                                    handleSubmit,
                                    className,
                                    buttonOpenText = "Додати перевезення",
                                    headerText = "Додати перевезення",
                                    buttonSubmitText = "Додати"
                                }) => {

    const [transportation, setTransportation] = useState({
        startDate: '', startLocation: '', endDate: '', endLocation: '', currentWeight: '',
        additionWeight: '', currentPeople: '', additionPeople: '', carId: ''
    })

    const [errors, setErrors] = useState({})

    const setDefault = () => {
        setTransportation({
            startDate: '', startLocation: '', endDate: '', endLocation: '', currentWeight: '',
            additionWeight: '', currentPeople: '', additionPeople: '', carId: -1
        })
        setErrors({})
    }


    return (
        <div className={className}>
            <ModalView
                buttonOpenText={buttonOpenText}
                headerText={headerText}
                buttonCloseText={"Закрити"}
                buttonSubmitText={buttonSubmitText}
                handleSubmit={() => handleSubmit(transportation, setErrors)}
                setDefaultInstase={setDefault}
                content={
                    <TransportationInputs
                        transportation={transportation}
                        setTransportation={setTransportation}
                        inputs={inputs}
                        inputsErrors={errors}
                    />
                }
            />
        </div>
    );
};

export default AddTransportationModal;