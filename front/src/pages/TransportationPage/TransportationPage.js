import React, {useEffect, useState} from 'react';
import AddTransportationModal from "../../components/Modal/TransportationModal/AddTransportationModal";
import {validateTransportation} from "../../components/Modal/TransportationModal/utils";
import {createTransportation, getAllTransportation, setStatus} from "../../controllers/TransportationController";
import TransportList from "../../components/TransportList/TransportList";

const TransportationPage = () => {
    const [transportation, setTransportation] = useState([])
    const handleSubmitAddTransportation = (transportation, setErrors) => {
        const errors = validateTransportation(transportation)
        setErrors(errors)

        if (Object.getOwnPropertyNames(errors).length !== 0) {
            return false
        }

        createTransportation(transportation).then(data => {
            fetchTransportation()
        }).catch(e => {
            console.log(e)
        })


        return true
    }

    const fetchTransportation = () => {
        getAllTransportation().then(data => {
            setTransportation(data)
        })
    }

    const changeStatus = (id, status) => {
        setStatus(id, status).then(() => {
            fetchTransportation()
        })
    }

    useEffect(() => {
        fetchTransportation()
    }, []);

    return (
        <>
            <AddTransportationModal
                className={"text-center my-4"}
                handleSubmit={handleSubmitAddTransportation}
            />

            <TransportList changeStatus={changeStatus} title={"Виконують завдання"} list={transportation.filter(t => t.status === "INPROGRESS")}/>

            <TransportList changeStatus={changeStatus} title={"Чекають завдання"} list={transportation.filter(t => t.status === "WAITING")}/>

            <TransportList changeStatus={changeStatus} title={"Виконали завдання"} list={transportation.filter(t => t.status === "FINISHED")}/>

            <TransportList changeStatus={changeStatus} title={"Відмінені завдання"} list={transportation.filter(t => t.status === "CANCELED")}/>
        </>
    );
};

export default TransportationPage;