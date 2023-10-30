import React, {useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import {InputGroup} from "react-bootstrap";
import {getAllCars} from "../../controllers/CarController";

const TransportationInputs = (props) => {
    const [cars, setCars] = useState([])

    const handleTransportation = (e, property) => {
        const value = e.target.value;
        props.setTransportation({...props.transportation, [property]: value});
    }

    useEffect(() => {
        getAllCars().then(data => {
            setCars(data.available)
        })

    }, []);

    const handleSelection = (e) => {
        props.setTransportation({...props.transportation, carId: e.target.value})
    }

    return (<div className="row">
        <div className="text-danger">{props.inputsErrors["carId"]}</div>
        <InputGroup className="mb-3">
            <InputGroup.Text>{"Транспорт"}</InputGroup.Text>
            <Form.Select
                onChange={e => handleSelection(e)}
                className={props.inputsErrors["carId"] ? "border-danger" : ""}
            >
                <option value={-1}>Вибір транспорту</option>
                {cars && cars.map(car => (
                    <option
                        value={car.id}
                        key={car.id}
                    >
                        {car.brand} | {car.number.replaceAll(" ", "")}
                    </option>
                ))}
            </Form.Select>
        </InputGroup>


        {props.inputs.map((i) => (<div key={i.label}>
            <div className="text-danger">{props.inputsErrors[i.property]}</div>
            <InputGroup className="mb-3" label={i.label}>
                {i.type !== "area" ? <>
                    {i.type === "date" && (<InputGroup.Text>{i.label}</InputGroup.Text>)}
                    <Form.Control
                        onChange={(e) => handleTransportation(e, i.property)}
                        type={i.type}
                        placeholder={i.label}
                        value={props.transportation[i.property]}
                        className={props.inputsErrors[i.property] ? "border-danger" : ""}
                    />
                </> : <Form.Control
                    onChange={(e) => handleTransportation(e, i.property)}
                    placeholder={i.label}
                    value={props.transportation[i.property]}
                    className={props.inputsErrors[i.property] ? "border-danger" : ""}
                    as="textarea"
                    rows={10}
                />}
            </InputGroup>
        </div>))}
    </div>);
};

export default TransportationInputs;